// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as vsls from 'vsls';
import { extensions } from "vscode";
import { CoqLspAPI, sendYade, sendNewEquation, completeEquation, getCoqApi, setCoqEditor, launchYade, trySendYade } from './yade';

const serverUrl = "ws://localhost:8080";

const relativeLinks = ["elm.js","js/katex.min.css.js",
"js/katex-custom-element.js"
]
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
			if (line.startsWith(magic_string))
			  sendYade(context, "set-first-tab", line.slice(magic_string.length));            
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
	console.log("Now, testing liveshare api");
	vsls.getApi().then((nullApi) => {
		if (!nullApi) {
			console.log('No LiveShare API');
			return;
		}
		let api = nullApi;
		
		console.log('LiveShare API found');
		function initialiseServer(session:vsls.Session) {
			if (session.role == vsls.Role.Guest) {
				trySendYade(context,"mayConnect", serverUrl);
				return;
			}
			if (session.role == vsls.Role.Host) {
				// launch YADE server
				import('./server.js').then(() => {
					console.log("alors");
					api.shareServer(
						{
							port: 8080,
							displayName: "YADE server",
							browseUrl: serverUrl
						}
					);			
					trySendYade(context,"mayConnect", serverUrl);
				}, (err) => 
					console.log(err)
				).catch(err => console.log(err));
				return;
			}			
		}
		initialiseServer(api.session);
		api.onDidChangeSession((e) => {
			initialiseServer(e.session);	
		});
	});
}

// This method is called when your extension is deactivated
export function deactivate() {}
