// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';



// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
		//console.log('« abriand-sin » est maintenant configuré »');


	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('abriand-sin.configurer', () => {
		//$ Configuration automatique pour les postes lycée
		//* Header
		let nomUtilisateur=process.env['USERNAME']?.trim();
		nomUtilisateur=nomUtilisateur?.split(" ",2).reverse().join(' ');
		let adresseMail : string|undefined = nomUtilisateur?.replace(" ",".").toLowerCase()+".pro@gmail.com";
		let powerHeaderTemplateHeader = `
 _______       _            _     _          ______        _                 _ 
(_______)     (_)       _  (_)   | |        (____  \\      (_)               | |
 _______  ____ _  ___ _| |_ _  __| |_____    ____)  ) ____ _ _____ ____   __| |
|  ___  |/ ___) |/___|_   _) |/ _  | ___ |  |  __  ( / ___) (____ |  _ \\ / _  |
| |   | | |   | |___ | | |_| ( (_| | ____|  | |__)  ) |   | / ___ | | | ( (_| |
|_|   |_|_|   |_(___/   \\__)_|\\____|_____)  |______/|_|   |_\\_____|_| |_|\\____|
	
Auteur: <author>(<email>) 
$TM_FILENAME(Ɔ) $CURRENT_YEAR
Description : \${1:Saisissez la description puis « Tab »}
Créé le :  !date! 
Dernière modification : mercredi 29 décembre 2021, 18:00:58
`;
		let powerHeaderUpdateContent = ["Dernière modification :\\s+(.+)=!date!"];
		let changerNom = 'Changer le nom ou l\'adresse mail';
		let laisserNom = 'Laisser comme ça';
		vscode.window.showInformationMessage(`
			Pour les entêtes de fichier,\n
			Le nom d'utilisateur est : ${nomUtilisateur}\n
			l'adresse mail est : ${adresseMail}`, { modal: true }, changerNom, laisserNom)
			.then(async selection => {
				if (selection === changerNom) {
					nomUtilisateur = await vscode.window.showInputBox({
						prompt: "Nom du codeur pour l'entête :",
						value: nomUtilisateur
					});
					adresseMail = await vscode.window.showInputBox({
						prompt: "Adresse mail du codeur pour l'entête :",
						value: adresseMail
					});
					let powerHeaderVariables = [`<author>='${nomUtilisateur}'`, `<email>='${adresseMail}'`, `!date!=new Date().toLocaleString("fr-FR",{weekday: "long", year: "numeric", month: "long", day: "numeric", hour:"numeric", minute:"2-digit", second:"2-digit"})`];
					vscode.workspace.getConfiguration("powerHeader").update("variables", powerHeaderVariables, vscode.ConfigurationTarget.Global);
				}
			});
		let powerHeaderVariables = [`<author>='${nomUtilisateur}'`, `<email>='${adresseMail}'`, `!date!=new Date().toLocaleString("fr-FR",{weekday: "long", year: "numeric", month: "long", day: "numeric", hour:"numeric", minute:"2-digit", second:"2-digit"})`];

		vscode.workspace.getConfiguration("powerHeader.update").update("content", powerHeaderUpdateContent, vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("powerHeader").update("variables", powerHeaderVariables, vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("powerHeader.autoInsert").update("enable", true, vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("powerHeader.autoInsert").update("enable", true, vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("powerHeader").update("template",powerHeaderTemplateHeader,vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("powerHeader.update").update("enable", "save", vscode.ConfigurationTarget.Global);
		//* Bracket
		let aide = 'Comment faire ? ';
		vscode.window.showInformationMessage('Vous pouvez désormais supprimer l\'extension « Bracket Pair colorizer 2 » qui est maintenant incluse dans VS Code.', aide)
			.then(selection => {
				if (selection === aide) {
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
		let dossierQt = "C:\\Qt\\" + fs.readdirSync('c:/Qt')[0] + "\\mingw81_64\\bin\\";
		let numQt = fs.readdirSync('c:/Qt')[0].charAt(0);
		vscode.workspace.getConfiguration("pyqt-integration.qtdesigner").update("path", dossierQt + "designer.exe", vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("pyqt-integration.linguist").update("cmd", dossierQt + "linguist.exe", vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("pyqt-integration.pyuic").update("cmd", "pyuic" + numQt, vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("pyqt-integration.pyrcc").update("cmd", "pyrcc" + numQt, vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("pyqt-integration.pylupdate").update("cmd", "pylupdate"+numQt, vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("pyqt-integration.pyuic.compile").update("addOptions", "--execute", vscode.ConfigurationTarget.Global);
		//* Telemetry
		vscode.workspace.getConfiguration("telemetry").update("telemetryLevel", false, vscode.ConfigurationTarget.Global);
		//$ Fin de la configuration
		console.log('« abriand-sin » est maintenant configuré »');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
