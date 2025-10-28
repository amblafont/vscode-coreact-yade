// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as vsls from 'vsls';
import { extensions } from "vscode";
import { CoqLspAPI, sendSetFirstTab, sendSetFirstTabEquation, sendNewEquation, completeEquation, getCoqApi, setCoqEditor, launchYade, trySendYade } from './yade';
// import { YadeEditorProvider } from './editor';


export function activate(context: vscode.ExtensionContext) {

	vscode.window.showInformationMessage('Activating coreact-yade');


	context.subscriptions.push(
		vscode.window.onDidChangeTextEditorSelection(
		  (evt: vscode.TextEditorSelectionChangeEvent) => {
            let coqApi = getCoqApi();
			if (!coqApi) return;
	
			let editor = evt.textEditor;
			setCoqEditor(editor);
			let position = editor.selection.active;
			
			const magic_string = "YADE DIAGRAM";
			let line = editor.document.lineAt(position).text.trim();
			if (line.startsWith(magic_string)) {
				let data = line.slice(magic_string.length);
				try {
					JSON.parse(data);
					sendSetFirstTab(context, JSON.parse(data));            
				} 
				catch (e) {
					if (e instanceof SyntaxError) {
						sendSetFirstTabEquation(context,
							  { statement : data,
								isVerbatim : false
					         });
					}
				}

			}
			else
			  sendNewEquation(context, coqApi, editor);
			}
		)
	  );

	  context.subscriptions.push(
		vscode.commands.registerTextEditorCommand('coreact-yade.completeDiagram', (editor) => 
		   {
			let coqApi = getCoqApi();
			if (!coqApi) return;
			completeEquation(context, coqApi, editor);          
     })
	);
	context.subscriptions.push(
		vscode.commands.registerCommand('coreact-yade.launchYade', () => {
			launchYade(context);
		})
	);
	context.subscriptions.push(
		vscode.commands.registerCommand('coreact-yade.launchExperimentalYade', () => {
			vscode.window.showInformationMessage('Launching experimental Yade');
			launchYade(context, true);
		})
	);
	// context.subscriptions.push(YadeEditorProvider.register(context));
	
}

// This method is called when your extension is deactivated
export function deactivate() {}
