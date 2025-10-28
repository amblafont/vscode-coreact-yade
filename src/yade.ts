import * as vscode from 'vscode';
import {Range, extensions} from 'vscode';
import {
	VersionedTextDocumentIdentifier,
  } from "vscode-languageclient";

import { GoalRequest, GoalAnswer, PpString } from "./types";

const experimentalLink = "https://amblafont.github.io/graph-editor/";

const tactic_explicit = "yade.to_notation_with_explicit_objects";
const tactic_normalise_object = "yade.normalise_objects";
const start_snipset = "(* START OF YADE SNIPSET *)";
const end_snipset = "(* END OF YADE SNIPSET *)";
const tactic_duplicate_yade = "let t := type of yade in eassert t";

// Extension API type (note this doesn't live in `lib` as this is VSCode specific)
export interface CoqLspAPI {
	/**
	 * Query goals from Coq
	 * @param params goal request parameters
	 */
	goalsRequest(params: GoalRequest): Promise<GoalAnswer<PpString>>;
  }

export function getCoqApi() : CoqLspAPI | undefined {
    let coqlsp = extensions.getExtension('ejgallego.coq-lsp');
    if (!coqlsp) {
      vscode.window.showErrorMessage("YADE: Extension coq-lsp not found");
        return;
    }
    if (!coqlsp.activate) {
      vscode.window.showErrorMessage("YADE: Extension coq-lsp inactive");
      return;
    }
    if (coqlsp.exports === undefined) {
      vscode.window.showErrorMessage("YADE: Extension coq-lsp not exporting any API");
      return;
    }
    return coqlsp.exports as CoqLspAPI;
}

// do not use this variable directly: instead, use launchYade()
// let yadeProcess : child_process.ChildProcess | undefined
// Only allow a single Cat Coder
let yadePanel: vscode.WebviewPanel | undefined = undefined;
let coqEditor : vscode.TextEditor | undefined = undefined;

/*
return the list of filenames recursively found in the directory.
The filenames are prefixed with the prefix string.
*/
function listFilesWithPrefix(context:vscode.ExtensionContext, prefix:string, uri: vscode.Uri):PromiseLike<string[]> {
  let files : string[] = [];
  
  return vscode.workspace.fs.readDirectory(uri).then(
    (value) => {
      let directories: PromiseLike<string[]>[] = [];
      for (var file of value) {
        const name = file[0];
        const type = file[1];
        if (type == vscode.FileType.Directory) {
          const list = 
             listFilesWithPrefix(context, prefix + name + "/", vscode.Uri.joinPath(uri, name));
          directories.push(list);
        }
        if (type == vscode.FileType.File)
          files.push(prefix + name);
      }
      return Promise.all(directories);
    }
  ).then( 
    (values) => {
      for (var value of values) {
        files = files.concat(value);
      }
      return files;
    }
  )
}

function getMediaUri(context:vscode.ExtensionContext):vscode.Uri {
  return vscode.Uri.joinPath(context.extensionUri, 'media');
}

function listReplacementLinks(context:vscode.ExtensionContext):PromiseLike<string[]> {
  const mediaUri = getMediaUri(context);
  // read the file mediaUri/files 
  const filesPath = vscode.Uri.joinPath(mediaUri, 'files.txt');
  return vscode.workspace.fs.readFile(filesPath)
    .then(fileContent => {
      const content = new TextDecoder().decode(fileContent);

      // remove the starting './'
      return content.split('\n').map(line => line.substring(2)).filter(line => line.length > 0);
    });


  // return listFilesWithPrefix(context, "", mediaUri);
}

function injectKatexCss(context:vscode.ExtensionContext,   htmlContent:PromiseLike<string>):PromiseLike<string> {
  const mediaUri = getMediaUri(context);
  const script = '<script src="katex/katex.min.css.js"></script>';
  const scriptPath = vscode.Uri.joinPath(mediaUri, 'katex/katex.min.css.js');
  
  return vscode.workspace.fs.readFile(scriptPath)
  .then (scriptContent => {
    // Convert Uint8Array to string
    return new TextDecoder().decode(scriptContent);
  })
  .then(scriptContent => Promise.all([htmlContent, scriptContent]))
  .then(
    ([htmlData, scriptContent]) => {
      return htmlData.replace(script, "<script>" + scriptContent + "</script>");
    }
  );
}

function regexNotPrefixed(prefix:string, pattern:string):RegExp {
  return new RegExp("(?<!"+ prefix + ")" + pattern, "g");
}

export function launchYade(context:vscode.ExtensionContext, experimental = false):vscode.WebviewPanel {
	if (yadePanel !== undefined)
	   {return yadePanel;}
	
  const panel = vscode.window.createWebviewPanel(
    'YADE',
    'YADE',
    vscode.ViewColumn.One,
    {
        enableScripts: true // Enable scripts in the webview
        , retainContextWhenHidden: true // keep the state of the webview when hidden
        ,  localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'media')]
    }
  );
  panel.onDidDispose(() => {
   yadePanel = undefined;
  });


  // use the fetch api to get the file https://amblafont.github.io/graph-editor-experimental/index.html
  // and then replace the relative links with the correct ones

  let htmlPromise: PromiseLike<string>;
  const mediaUri = vscode.Uri.joinPath(context.extensionUri, 'media');

  if (experimental)
    htmlPromise = fetch(experimentalLink + 'index.html')
    .then(response => response.text());
  else {
    // Get the path to the HTML file
    const htmlPath = vscode.Uri.joinPath(mediaUri, 'index.html');
    
    htmlPromise = vscode.workspace.fs.readFile(htmlPath)
    .then (htmlContentArr => {
      // Convert Uint8Array to string
      return new TextDecoder().decode(htmlContentArr);
    });

  }


  Promise.all([injectKatexCss(context, htmlPromise), listReplacementLinks(context)])
  // Read the HTML file content
  .then (([htmlContent, relativeLinks]) => {
    for (var relLink of relativeLinks) {
      // Get path to resource on disk
      let regex:RegExp;
      let correctLink:string;
      if (experimental) {
        correctLink = experimentalLink + relLink;
        regex = regexNotPrefixed(experimentalLink, relLink);
      }
      else {
        const onDiskPath = vscode.Uri.joinPath(mediaUri, relLink); 
        correctLink = panel.webview.asWebviewUri(onDiskPath).toString();
        // regex that matches relLink only if it is not preceded by media.
        // (otherwise it means the link has already been replaced)
        regex = regexNotPrefixed("media.", relLink);
      }
      htmlContent = htmlContent.replaceAll(regex, correctLink);
    }
    // Set the HTML content to the webview
    panel.webview.html = htmlContent;
  });
  // Handle messages from the webview
  panel.webview.onDidReceiveMessage(
    message => {
      handleMsg(context,message);
    },
    undefined,
    context.subscriptions
  );
  yadePanel = panel;
  return yadePanel;

}


function insertAt(text:string, position:vscode.Position) {
  const editor = coqEditor;
  if (!editor) {return;}
  return editor.edit(editBuilder => {
      editBuilder.insert(position, text);
  });
}
function insertAtCursor(text:string) {
  const editor = coqEditor;
  if (!editor) {return;}
  return insertAt(text, editor.selection.active);
}
function insertAfterCursor(text:string){
  const editor = coqEditor;
  if (!editor) {return;}
  let position = editor.selection.active;
  position = new vscode.Position(position.line, position.character+1)
  return insertAt(text, position);
}

// https://stackoverflow.com/questions/69671964/how-to-put-cursor-on-specified-line-in-vscode-editor-extension-programatically
function moveCursorLeft() {
  const editor = coqEditor;
  if (!editor)
     return false;
  const newSelections = [];

  for (const selection of editor.selections) {
      const oldCursorPosition = selection.start;
      const newCursorPosition = new vscode.Position(
          oldCursorPosition.line,
          Math.max(0, oldCursorPosition.character - 1)
      );
  
      // We set start & end to the same Position, so this is setting a cursor position,
      // not a selected range of text
      const newSelection = new vscode.Selection(newCursorPosition, newCursorPosition);
      newSelections.push(newSelection);
  }
  
  editor.selections = newSelections;
  return true;
}
function handleMsg(context:vscode.ExtensionContext,message:any) {
	if (!message.key) {
		return;
	}
  const editor = coqEditor;
	switch (message.key) {
    case 'alert':
      vscode.window.showInformationMessage(message.content);
      break;
    case 'prompt':
      const question = message.content.question;
      const defaultAnswer = message.content.default;
      // open a prompt dialog box
      vscode.window.showInputBox({prompt: question, value: defaultAnswer}).then(
        (answer) => {
          if (answer !== undefined)
            sendPrompt(context, answer);
        }
      );
      break;
		case 'incomplete-equation':			
      if (!editor) {return;}
      const statement = message.content.statement;
      const proof = message.content.script;
			const startText = 
         "\n" + start_snipset + "\n"
         + "eassert (yade : " + statement + ").\n"
         + "(* Your proof in the block below. When done, execute the command 'Complete diagram' (with ctrl-shift-P) while the mouse is in this block: it will save complete the diagram (saving the proof) and remove the snipset.  *)"
         +"\n{\n" + proof;
      const endText = "\n}"
        + "\n" + tactic_duplicate_yade + ".\n"
        + "(* The below tactic is meant to be customised *)\n"
        + tactic_normalise_object + ".\n" 
        + "(* You can check the statement that will be send to the diagram at the end of the line below *)\n"
        + tactic_explicit + ".\n"
        + end_snipset + "\n" 
      // first, show the text editor with showTextDocument
      // vscode.window.showInformationMessage('incomplete equation');
      vscode.window.showTextDocument(editor.document, editor.viewColumn, true).then(function () {
      insertAtCursor(startText + " ")?.then(function (b){
        if (!b)
          return;
        if (!moveCursorLeft())
          return;
        insertAfterCursor(endText);
        
      });});
      // const curPosition = editor.selection.active;
      // let curLine = curPosition.line;
      // let curChar = curPosition.character;

      // const beforePosition = new vscode.Position(curLine, curChar);
      // const nextPosition = new vscode.Position(curLine, 1 + curChar)
      // editor.edit(editBuilder => {
      //     editBuilder.insert(curPosition, " ");
      //     editBuilder.insert(nextPosition, endText);
      //     editBuilder.insert(curPosition, startText);
      // });
    
      // insertAfterCursor(text);
			break;
    case 'apply-proof':	
      if (!editor) {
        return;
      }
      const api = getCoqApi();
      if (!api)
        return
      applyProof(context, api, message.content.statement, message.content.script)
      break;
    case 'generate-proof':
      if (!editor) {
        return;
      }
      vscode.window.showTextDocument(editor.document, editor.viewColumn, true).then(function () {
            insertAtCursor(message.content);});
            break;
	}
}

function sendYade(context:vscode.ExtensionContext ,key:String, content:any) {
  
	launchYade(context);
  trySendYade(context, key, content);
}

export function trySendYade(context:vscode.ExtensionContext, key:String, content:any) {
  let data = {key:key, content:content};
  if (yadePanel !== undefined)
    yadePanel.webview.postMessage(data);
}

export function setCoqEditor(editor:vscode.TextEditor) {
  coqEditor = editor;
}

function getStatementAt(editor:vscode.TextEditor, command:string, api:CoqLspAPI, pos:vscode.Position):Promise<markupContent | null> {
  let version = editor.document.version;
  let uri = editor.document.uri;
  let textDocument = VersionedTextDocumentIdentifier.create(
    uri.toString(),
    version
  );
  let position = { line: pos.line, character: pos.character };
  let strCursor: GoalRequest = {
    textDocument,
    position: position,
    pp_format: "Str",
    command: command
   };
  return api.goalsRequest(strCursor).then(
    (goals) => { 
        if (! goals.goals)
          return null;
       
        let ty = goals.goals?.goals[0].ty;
        if (typeof ty != "string") 
           return null;
        return extractContentIfWrapped(ty);
     }
    , (reason) => {console.log("error: " + reason); return null}
  );
}

export function sendSetFirstTabEquation(context:vscode.ExtensionContext, msg : {statement : string, isVerbatim : boolean}) {
  sendYade(context, "set-first-tab-equation", msg);
}

// function sendLoad(context:vscode.ExtensionContext, msg : any) {
//   sendYade(context, "load", msg);
// }
export function sendSetFirstTab(context:vscode.ExtensionContext, msg : any) {
  sendYade(context, "set-first-tab", msg);
}

function sendApplyProof(context:vscode.ExtensionContext, 
    msg : {statement : string, script : string, isVerbatim : boolean}) {
    sendYade(context, "applied-proof", msg);
}

function sendPrompt(context:vscode.ExtensionContext, 
    msg:string){
      sendYade(context, "prompt", msg);
}



export function sendNewEquation(context:vscode.ExtensionContext, api:CoqLspAPI, editor:vscode.TextEditor) {
  
  let position = editor.selection.active;
  let line = editor.document.lineAt(position);
  let endLinePosition = line.range.end;


  getStatementAt(editor, tactic_explicit + ".", api, endLinePosition).then(
    (statement) => {
      if (statement === null)
        return;
      sendSetFirstTabEquation(context, {statement : statement.content, 
                isVerbatim : isVerbatim(statement)});
    },
   (reason) => console.log("error: " + reason)
 );
}

type markupContent = { tag : string, content : string };

function isVerbatim(m : markupContent):boolean {
  return m.tag.toLowerCase().includes("verb");
}

function extractContentIfWrapped(str: string): markupContent | null {
  const match = str.match(/^\s*<([^>]+)>([\s\S]*)<\/([^>]+)>\s*$/);
  if (!match)
      return null;
  if (match[1] != match[3])
      return null;
  return { tag : match[1], content : match[2]};
}

function findCoqScript(document : vscode.TextDocument, endLineNumber:number):
   {assertLine : number, startScript : number, endScript : number}
 {
    let lineNumber = endLineNumber;
    // console.log("line number: " + lineNumber);
    let lineTrimmed = "";
    while(lineTrimmed != "}") {
     lineNumber --;
    //  console.log("line number: " + lineNumber);
     lineTrimmed = document.lineAt(lineNumber).text.trim();
    }
    let endScriptNumber = lineNumber - 1;
    lineTrimmed = ""
    while(lineTrimmed != start_snipset) {
        lineNumber --;
        // console.log("line number: " + lineNumber);
        lineTrimmed = document.lineAt(lineNumber).text.trim();
    }
    let assertLineNumber = lineNumber;
    lineTrimmed = ""
    while(lineTrimmed != "{") {
        lineNumber ++;
        lineTrimmed = document.lineAt(lineNumber).text.trim();
    }
    return { assertLine : assertLineNumber, startScript : lineNumber + 1, endScript: endScriptNumber };
}

function findEndOfSnipset(editor:vscode.TextEditor):vscode.Position {
  let lineNumber = editor.selection.active.line;
  
  while(editor.document.lineAt(lineNumber).text.trim() 
     != end_snipset) {
    lineNumber ++;
  }
  return editor.document.lineAt(lineNumber).range.end;

}

export function completeEquation(context:vscode.ExtensionContext, coqApi:CoqLspAPI, editor: vscode.TextEditor) {
  coqEditor = editor;

  // if (editor.document.lineAt(position).text.replaceAll(" ","")
  //       == "norm_graph.") {
  //   sendNewEquation(editor);
  //   return;
  // }

  // TODO: factor with sendNewEquation
  let normPosition = findEndOfSnipset(editor);
  let line = normPosition.line
  const {assertLine, startScript, endScript} = findCoqScript(editor.document, normPosition.line);
  let coqScript = editor.document.getText(new Range(startScript, 0, endScript + 1, 0));
  // remove the last newline character
  coqScript = coqScript.slice(0, -1);

  
  getStatementAt(editor, "", coqApi, normPosition).then(
    (statement) => {
      if (statement === null)
        return;
      sendApplyProof(context, {statement:statement.content, script:coqScript, isVerbatim : isVerbatim(statement)});
      editor.edit(editBuilder => {
        editBuilder.delete(new Range(assertLine, 0, line + 1, 0));
      });
    },
   (reason) => console.log("error: " + reason)
 );
  // coqApi.goalsRequest(strCursor).then(
  //   (goals) => { 
  //       var hyps = goals.goals?.goals[0].hyps;
  //       var eq = hyps![hyps!.length - 1].ty;
  //       sendYade(context, "applied-proof", {statement:eq, script:coqScript});
  //       editor.edit(editBuilder => {
  //           editBuilder.delete(new Range(assertLine, 0, line + 1, 0));
  //       });
  //    },
  //   (reason) => console.log("error: " + reason)
  // );
}

function applyProof(context:vscode.ExtensionContext, coqApi:CoqLspAPI, statement:string, proofScript:string) {
  // TODO factor with completeEquation
  const editor = coqEditor; // vscode.window.activeTextEditor;
  if(!editor) {
    return
  }
  let normalisedProof = proofScript.trim();
  if (normalisedProof != "" && normalisedProof.substring(normalisedProof.length - 1) != ".")
     normalisedProof += "." // normalisedProof.substring(0, normalisedProof.length - 1)
  const fullProof = "eassert (yade : " + statement + "). { "
          + normalisedProof + " } " 
          + tactic_duplicate_yade + ". " +
            tactic_normalise_object + ". " + 
            tactic_explicit + ".";
  // console.log(fullProof)
  


 function explainFailure() {
  let msg : string
  // if (normalisedProof.includes("."))
    //  msg = 'Failed proof, probably due to the use of dot-separated tactics (not yet supported)';
  // else 
     msg = 'Failed proof: ' + fullProof;  
  vscode.window.showErrorMessage(msg);
 }

 getStatementAt(editor, fullProof, coqApi, editor.selection.active).then(
  (statement) => {
    if (statement === null) {
      explainFailure();
      return;
    }
    vscode.window.showInformationMessage('Valid proof: ' + fullProof);
    let data = { script: proofScript, statement:statement.content, 
       isVerbatim : isVerbatim(statement)  
    }; 
    sendApplyProof(context, data);      
    // sendYade(context, "applied-proof", data);
  },
  (reason) => { 
    explainFailure();
    console.log("error: " + reason); }
);
//  coqApi.goalsRequest(strCursor).then(
//    (goals) => { 
//        var hyps = goals.goals?.goals[0].hyps;
//        if (!hyps) {
//         explainFailure();
//         return;
//        }
//        vscode.window.showInformationMessage('Valid proof: ' + fullProof);
         
//        console.log(goals);
//        var eq = hyps![hyps!.length - 1].ty;
//        var data = { script: proofScript, statement:eq};
       
//        sendYade(context, "applied-proof", data);
//     },

}

