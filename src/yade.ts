import * as vscode from 'vscode';
import {Range, extensions} from 'vscode';
import * as child_process from 'child_process';
import {
	VersionedTextDocumentIdentifier,
  } from "vscode-languageclient";

// import {client} from './client'
import { GoalRequest, GoalAnswer, PpString } from "./types";

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
let yadeProcess : child_process.ChildProcess | undefined

function launchYade():child_process.ChildProcess {
	if (yadeProcess !== undefined)
	   {return yadeProcess;}
  console.log("Launching YADE");
	// let cwdYade = '/home/ouguir/elm/diagram';
	// let electronPath = cwdYade + "/node_modules/electron/dist/electron";
	
  let yadeExecutable : string;
  switch (process.platform) {
    case 'darwin':
       yadeExecutable = "/Applications/YADE.app/Contents/MacOS/YADE";
       break;
    default:
       yadeExecutable = "coreact-yade";
  }
  // yadeProcess = child_process.spawn("open", ["-a", "YADE"], 
  yadeProcess = child_process.spawn(yadeExecutable, [], 
	  //  electronPath, [cwdYade], 
	   {env:{...process.env, ELECTRON_RUN_AS_NODE: ''}, 
	   stdio: [ 'inherit', 'inherit', 'inherit', 'ipc' ]});
    yadeProcess.on('exit', signal => {yadeProcess = undefined})
	yadeProcess.on('message', message => {console.log("message recu: ");
      console.log(message);
	  handleMsg(message);
	});
  if(typeof yadeProcess.pid !== "number")
    console.log("Fail to load YADE.");
  
	return yadeProcess;
}


function insertAt(text:string, position:vscode.Position) {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {return;}
  return editor.edit(editBuilder => {
      editBuilder.insert(position, text);
  });
}
function insertAtCursor(text:string) {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {return;}
  return insertAt(text, editor.selection.active);
}
function insertAfterCursor(text:string){
  const editor = vscode.window.activeTextEditor;
  if (!editor) {return;}
  let position = editor.selection.active;
  position = new vscode.Position(position.line, position.character+1)
  return insertAt(text, position);
}

// https://stackoverflow.com/questions/69671964/how-to-put-cursor-on-specified-line-in-vscode-editor-extension-programatically
function moveCursorLeft() {
  const editor = vscode.window.activeTextEditor;
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
function handleMsg(message:any) {
	if (!message.key) {
		return;
	}
  const editor = vscode.window.activeTextEditor;
	switch (message.key) {
		case 'incomplete-equation':			
      if (!editor) {return;}
      const statement = message.content.statement;
      const proof = message.content.script;
			const startText = "eassert (yade : " + statement + ").\n{\n" + proof;
      const endText = "\n}"
        + "\n (* execute command at the end of the line below *)"
        + "\n norm_graph_hyp yade.  ";
      insertAtCursor(startText + " ")?.then(function (b){
        if (!b)
          return;
        if (!moveCursorLeft())
          return;
        insertAfterCursor(endText);
        
      });
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
      if (!editor) {return;}
      const api = getCoqApi();
      if (!api)
        return
      applyProof(api, message.content.statement, message.content.script)
      break;
    case 'generate-proof':
            insertAtCursor(message.content);
            break;
	}
}

export function sendYade(key:String, content:any) {
	launchYade().send({key:key, content:content});
}



export function sendNewEquation(api:CoqLspAPI, editor:vscode.TextEditor) {
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
       sendYade("load", goals.goals?.goals[0].ty);
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

export function completeEquation(coqApi:CoqLspAPI, editor: vscode.TextEditor) {
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
  console.log("coq script: ") ;
  console.log(coqScript);
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
        sendYade("applied-proof", {statement:eq, script:coqScript});
        editor.edit(editBuilder => {
            editBuilder.delete(new Range(assertLine, 0, line + 1, 0));
        });
     },
    (reason) => console.log("error: " + reason)
  );
}

function applyProof(coqApi:CoqLspAPI, statement:string, proofScript:string) {
  // TODO factor with completeEquation
  const editor = vscode.window.activeTextEditor;
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
       
       sendYade("applied-proof", data);
    },
   (reason) => console.log("error: " + reason)
 );
}

