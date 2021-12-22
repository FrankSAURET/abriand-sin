// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import fso, { FileSystemObject } from 'fso';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('« abriand-sin » est maintenant configuré »');


	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('abriand-sin.configurer', () => {
		//$ Configuration automatique pour les postes lycée
		//* Bracket
		let Aide = 'Comment faire ? ';
		vscode.window.showInformationMessage('Vous pouvez désormais supprimer l\'extension « Bracket Pair colorizer 2 » qui est maintenant incluse dans VS Code.', Aide)
			.then(selection => {
				if (selection === Aide) {
					vscode.env.openExternal(vscode.Uri.parse('https://github.com/FrankSAURET/abriand-sin/blob/master/image/SupprimerBracketPairColorizer2.gif?raw=true'));
				}
			});
		vscode.workspace.getConfiguration("editor").update("autoClosingBrackets", "always", vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("editor.bracketPairColorization").update("enabled", true, vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("editor.guides").update("bracketPairs", true, vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("editor.guides").update("bracketPairsHorizontal", true, vscode.ConfigurationTarget.Global);

		//* Python
		//Rajouter ici le chemin  pour l'extension microbit
		/*
		python.autoComplete.extraPaths
		python.analysis.extraPaths
		*/
		vscode.workspace.getConfiguration("python.analysis").update("completeFunctionParens", true, vscode.ConfigurationTarget.Global);

		//* Editor
		vscode.workspace.getConfiguration("editor.minimap").update("enabled", false, vscode.ConfigurationTarget.Global);

		//* Pyqt
		const fs = require('fs');
		let DossierQt = "C:\\Qt\\" + fs.readdirSync('c:/Qt')[0] + "\\mingw81_64\\bin\\";
		let NumQt = fs.readdirSync('c:/Qt')[0].charAt(0);
		
		vscode.workspace.getConfiguration("pyqt-integration.qtdesigner").update("path", DossierQt + "designer.exe", vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("pyqt-integration.linguist").update("cmd", DossierQt + "linguist.exe", vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("pyqt-integration.pyuic").update("cmd", "pyuic" + NumQt, vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("pyqt-integration.pyrcc").update("cmd", "pyrcc" + NumQt, vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("pyqt-integration.pylupdate").update("cmd", "pylupdate"+NumQt, vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("pyqt-integration.pyuic.compile").update("addOptions", "--execute", vscode.ConfigurationTarget.Global);

		//* Telemetry
		vscode.workspace.getConfiguration("telemetry").update("telemetryLevel", false, vscode.ConfigurationTarget.Global);

	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
