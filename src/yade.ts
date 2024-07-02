import * as vscode from 'vscode';
import {Range, extensions} from 'vscode';
import * as child_process from 'child_process';
import {
	VersionedTextDocumentIdentifier,
  } from "vscode-languageclient";

// import {client} from './client'
import { GoalRequest, GoalAnswer, PpString } from "./types";

import * as path from 'path';
import * as fs from 'fs';

const relativeLinks = ["elm.js","js/katex.min.css.js",
"js/katex-custom-element.js"
]

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
        console.log("Extension coq-lsp not found");
        return;
    }
    if (!coqlsp.activate) {
      console.log("Extension coq-lsp inactive");
      return;
    }
    if (coqlsp.exports === undefined) {
      console.log("Extension coq-lsp not exporting any API");
      return;
    }
    return coqlsp.exports as CoqLspAPI;
}

// do not use this variable directly: instead, use launchYade()
// let yadeProcess : child_process.ChildProcess | undefined
// Only allow a single Cat Coder
let yadePanel: vscode.WebviewPanel | undefined = undefined;
let coqEditor : vscode.TextEditor | undefined = undefined;

function launchYade(context:vscode.ExtensionContext):vscode.WebviewPanel {
	if (yadePanel !== undefined)
	   {return yadePanel;}

	
  const panel = vscode.window.createWebviewPanel(
    'YADE',
    'YADE',
    vscode.ViewColumn.One,
    {
        enableScripts: true // Enable scripts in the webview
        , retainContextWhenHidden: true // keep the state of the webview when hidden
    }
);
  panel.onDidDispose(() => {
   yadePanel = undefined;
  });

// Get the path to the HTML file
const htmlPath = path.join(context.extensionPath, 'media', 'grapheditor.html');

// Read the HTML file content
var htmlContent = fs.readFileSync(htmlPath, 'utf8');
for (var relLink of relativeLinks) {
// Get path to resource on disk
const onDiskPath = vscode.Uri.joinPath(context.extensionUri, 'media', relLink);

// And get the special URI to use with the webview
const correctLink = panel.webview.asWebviewUri(onDiskPath)
htmlContent = htmlContent.replace(relLink, correctLink.toString());
}

// Set the HTML content to the webview
panel.webview.html = htmlContent;
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
    case 'prompt':
      const question = message.content.question;
      const defaultAnswer = message.content.default;
      // open a prompt dialog box
      vscode.window.showInputBox({prompt: question, value: defaultAnswer}).then(
        (answer) => {
          if (answer !== undefined)
            sendYade(context, "prompt", answer);
        }
      );
      break;
		case 'incomplete-equation':			
      if (!editor) {return;}
      const statement = message.content.statement;
      const proof = message.content.script;
			const startText = "eassert (yade : " + statement + ").\n{\n" + proof;
      const endText = "\n}"
        + "\n (* execute command at the end of the line below *)"
        + "\n norm_graph_hyp yade.  ";
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

export function sendYade(context:vscode.ExtensionContext ,key:String, content:any) {
  let data = {key:key, content:content};
	launchYade(context).webview.postMessage(data);
}

export function setCoqEditor(editor:vscode.TextEditor) {
  coqEditor = editor;
}

export function sendNewEquation(context:vscode.ExtensionContext, api:CoqLspAPI, editor:vscode.TextEditor) {
  let version = editor.document.version;
  let position = editor.selection.active;
  let line = editor.document.lineAt(position);
  let endLinePosition = line.range.end;
  let uri = editor.document.uri;
  let textDocument = VersionedTextDocumentIdentifier.create(
   uri.toString(),
   version
  );
  let strCursor: GoalRequest = {
   textDocument,
   position: endLinePosition,
   pp_format: "Str",
   pretac: "norm_graph."
  };
 api.goalsRequest(strCursor).then(
   (goals) => { 
    
       if (! goals.goals)
         return;
       sendYade(context, "load", goals.goals?.goals[0].ty);
    },
   (reason) => console.log("error: " + reason)
 );
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
    while(!lineTrimmed.startsWith("eassert (yade")) {
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

function findNextNormGraphHyp(editor:vscode.TextEditor):vscode.Position {
  let lineNumber = editor.selection.active.line;
  
  while(editor.document.lineAt(lineNumber).text.replaceAll(" ","") 
     != "norm_graph_hypyade.") {
    lineNumber ++;
  }
  return editor.document.lineAt(lineNumber).range.end;

}

export function completeEquation(context:vscode.ExtensionContext, coqApi:CoqLspAPI, editor: vscode.TextEditor) {
  coqEditor = editor;
  let uri = editor.document.uri;
  let version = editor.document.version;
  let position = editor.selection.active;

  // if (editor.document.lineAt(position).text.replaceAll(" ","")
  //       == "norm_graph.") {
  //   sendNewEquation(editor);
  //   return;
  // }

  // TODO: factor with sendNewEquation
  let normPosition = findNextNormGraphHyp(editor);
  let line = normPosition.line
  const {assertLine, startScript, endScript} = findCoqScript(editor.document, normPosition.line);
  let coqScript = editor.document.getText(new Range(startScript, 0, endScript + 1, 0));
  // remove the last newline character
  coqScript = coqScript.slice(0, -1);
  // console.log("coq script: ") ;
  // console.log(coqScript);
  let textDocument = VersionedTextDocumentIdentifier.create(
     uri.toString(),
     version
   );
  let strCursor: GoalRequest = {
    textDocument,
    position: normPosition,
    pp_format: "Str",
  };
  coqApi.goalsRequest(strCursor).then(
    (goals) => { 
        var hyps = goals.goals?.goals[0].hyps;
        var eq = hyps![hyps!.length - 1].ty;
        sendYade(context, "applied-proof", {statement:eq, script:coqScript});
        editor.edit(editBuilder => {
            editBuilder.delete(new Range(assertLine, 0, line + 1, 0));
        });
     },
    (reason) => console.log("error: " + reason)
  );
}

function applyProof(context:vscode.ExtensionContext, coqApi:CoqLspAPI, statement:string, proofScript:string) {
  // TODO factor with completeEquation
  const editor = coqEditor; // vscode.window.activeTextEditor;
  if(!editor) {
    return
  }
  let normalisedProof = proofScript.trim();
  if (normalisedProof != "" && normalisedProof.substring(normalisedProof.length - 1) == ".")
     normalisedProof = normalisedProof.substring(0, normalisedProof.length - 1)
  // const fullProof = "(eassert (yade : " + statement + ");first by "
  //         + proofScript + "); norm_graph_hyp yade.";
  const fullProof = "(eassert (yade : " + statement + "); first by "
          + normalisedProof + ") ; norm_graph_hyp yade.";
  console.log(fullProof)
  let uri = editor.document.uri;
  let version = editor.document.version;
          
  let textDocument = VersionedTextDocumentIdentifier.create(
    uri.toString(),
    version
  );
 let strCursor: GoalRequest = {
   textDocument,
   position: editor.selection.active,
   pp_format: "Str",
   pretac: fullProof
 };
 coqApi.goalsRequest(strCursor).then(
   (goals) => { 
       var hyps = goals.goals?.goals[0].hyps;
       if (!hyps) {
        let msg : string
        if (normalisedProof.includes("."))
           msg = 'Failed proof, probably due to the use of dot-separated tactics (not yet supported)';
        else 
           msg = 'Failed proof: ' + fullProof;  
        vscode.window.showInformationMessage(msg);
        return;
       }
       vscode.window.showInformationMessage('Valid proof: ' + fullProof);
         
       console.log(goals);
       var eq = hyps![hyps!.length - 1].ty;
       var data = { script: proofScript, statement:eq};
       
       sendYade(context, "applied-proof", data);
    },
   (reason) => console.log("error: " + reason)
 );
}

