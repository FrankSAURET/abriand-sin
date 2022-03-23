// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
// Dernière modification : vendredi 11 février 2022, 19:04:03
import * as vscode from 'vscode';
const semver = require('semver');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	let numVersionPre = String(vscode.workspace.getConfiguration("ABriandSIN").get("VersionNb"));
	let jamaisLance = false;
	if (!semver.valid(numVersionPre)) {
		numVersionPre = "0.0.0";
		jamaisLance = true;
	}
	//§ Changer ici le numéro de version qui demande une reconfiguration
	if (semver.gt("0.1.0", numVersionPre)) {
		let daccord = 'Ok';
		vscode.window.showInformationMessage(`
			Pour configurer automatiquement l'extension ABriand SIN faites Ok.
			Sinon vous pourrez le faire aprés exécutant la commande « abriand-sin : configurer » `, { modal: true }, daccord)
			.then(async selection => {
				if (selection === daccord) {
					vscode.commands.executeCommand('abriand-sin.configurer');
				}
			});
	}

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('abriand-sin.configurer', () => {
		//$ Configuration automatique pour les postes lycée
		//* Header
		let nomUtilisateur: string | undefined = "";
		let adresseMail: string | undefined = "";

		if (jamaisLance) {
			// La variable d'environement "NC" donne le nom suivi de tous les prénoms de l'utilisateur
			// sur les PC lycée mais n'existe pas forcemment ailleurs.
			nomUtilisateur = process.env['NC']?.trim()||"";
			if (nomUtilisateur === "") { nomUtilisateur = process.env['username']?.trim()||""; }
			try {
				let prenom = nomUtilisateur?.split(" ", 2)[1].toLowerCase()||"";
				let nom = nomUtilisateur?.split(" ", 2)[0].toUpperCase()||"";
				prenom = prenom.slice(0, 1).toUpperCase() + prenom.slice(1);
				nomUtilisateur = prenom + " " + nom;
			}
			finally{
				adresseMail = nomUtilisateur?.replace(" ", ".").toLowerCase() + ".pro@gmail.com";
				jamaisLance = false;
			}
		}
		else {

			nomUtilisateur = String(vscode.workspace.getConfiguration("powerHeader").get("variables")).split(",", 2)[0].split("=")[1].replace(/'/gi, "");
			adresseMail = String(vscode.workspace.getConfiguration("powerHeader").get("variables")).split(",", 2)[1].split("=")[1].replace(/'/gi, "");
		}
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
Dernière modification : 
`;
		let powerHeaderUpdateContent = ["Dernière modification :\\s+([^\"]+)=!date!"];
		let changerNom = 'Changer le nom ou l\'adresse mail';
		let laisserNom = 'Laisser comme ça';
		vscode.window.showInformationMessage(`
			Pour les entêtes de fichier,
			Le nom d'utilisateur est : ${nomUtilisateur}
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
		vscode.workspace.getConfiguration("powerHeader").update("template", powerHeaderTemplateHeader, vscode.ConfigurationTarget.Global);
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
		vscode.workspace.getConfiguration("pyqt-integration.pylupdate").update("cmd", "pylupdate" + numQt, vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("pyqt-integration.pyuic.compile").update("addOptions", "--execute", vscode.ConfigurationTarget.Global);
		//* Telemetry
		vscode.workspace.getConfiguration("telemetry").update("telemetryLevel", "off", vscode.ConfigurationTarget.Global);
		//* Better-comments
		// let bcTag: string[] = [];
		// bcTag.map({ backgroundColor: "#fafe0bf7", bold: false, color: "#FF2D00", italic: false, strikethrough: false, tag: "!", underline: false });
		//let bctag = vscode.workspace.getConfiguration("better-comments").get("tags");
		let bcTag = [
			{
				backgroundColor: "#fafe0bf7",
				bold: false,
				color: "#FF2D00",
				italic: false,
				strikethrough: false,
				tag: "!",
				underline: false,
			},
			{
				backgroundColor: "transparent",
				bold: false,
				color: "#3498DB",
				italic: false,
				strikethrough: false,
				tag: "?",
				underline: false,
			},
			{
				backgroundColor: "transparent",
				bold: false,
				color: "#59b800",
				italic: false,
				strikethrough: true,
				tag: "//",
				underline: false,
			},
			{
				backgroundColor: "transparent",
				bold: false,
				color: "#FF8C00",
				italic: false,
				strikethrough: false,
				tag: "todo",
				underline: false,
			},
			{
				backgroundColor: "#fed3b3d9",
				bold: false,
				italic: false,
				strikethrough: false,
				tag: "*",
				underline: false,
			},
			{
				backgroundColor: "#ff80cc",
				bold: false,
				color: "#f5002d",
				italic: false,
				strikethrough: false,
				tag: "§",
				underline: false,
			},
			{
				backgroundColor: "#fd9117",
				bold: false,
				color: "#fff7ae",
				italic: false,
				strikethrough: false,
				tag: "$",
				underline: false,
			},
			{
				backgroundColor: "#a9fcff",
				bold: false,
				color: "#1600bd",
				italic: false,
				strikethrough: false,
				tag: "%",
				underline: false,
			},
			{
				backgroundColor: "#E7E6E6",
				bold: true,
				color: "#0072C7",
				italic: false,
				strikethrough: false,
				tag: "1-",
				underline: false,
			},
			{
				backgroundColor: "#E7E6E6",
				bold: false,
				color: "#0072C7",
				italic: false,
				strikethrough: false,
				tag: "2-",
				underline: false,
			},
			{
				backgroundColor: "#E7E6E6",
				bold: false,
				color: "#0072C7",
				italic: true,
				strikethrough: false,
				tag: "3-",
				underline: false,
			},
		];
		vscode.workspace.getConfiguration("better-comments").update("tags", bcTag, vscode.ConfigurationTarget.Global);
		vscode.workspace.getConfiguration("better-comments").update("highlightPlainText", true, vscode.ConfigurationTarget.Global);
		//$ Fin de la configuration
		let numVersionActu = vscode.extensions.getExtension("electropol-fr.abriand-sin")?.packageJSON["version"];
		vscode.workspace.getConfiguration("ABriandSIN").update("VersionNb", numVersionActu, vscode.ConfigurationTarget.Global);
		console.log('« abriand-sin » est maintenant configuré »');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
