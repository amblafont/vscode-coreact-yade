// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { extensions } from "vscode";
import { CoqLspAPI, sendYade, sendNewEquation, completeEquation, getCoqApi } from './yade';



export function activate(context: vscode.ExtensionContext) {

	vscode.window.showInformationMessage('Activating coreact-yade');


	context.subscriptions.push(
		vscode.window.onDidChangeTextEditorSelection(
		  (evt: vscode.TextEditorSelectionChangeEvent) => {
            let coqApi = getCoqApi();
			if (!coqApi) return;
	
			let editor = evt.textEditor;
			let position = editor.selection.active;
			
			const magic_string = "YADE DIAGRAM";
			let line = editor.document.lineAt(position).text.trim();
			if (line.startsWith(magic_string))
			  sendYade("set-first-tab", line.slice(magic_string.length));            
			else
			  sendNewEquation(coqApi, editor);
			  }
		)
	  );

	  context.subscriptions.push(
		vscode.commands.registerTextEditorCommand('coreact-yade.completeDiagram', (editor) => 
		   {
			let coqApi = getCoqApi();
			if (!coqApi) return;
			completeEquation(coqApi, editor);          
     })
	);
}

// This method is called when your extension is deactivated
export function deactivate() {}
