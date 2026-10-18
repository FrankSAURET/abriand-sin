# Pack d'Extension SIN
Collection  d'extension pour travailler en SIN.
<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=electropol-fr.abriand-sin"><img src="https://badgen.net/vs-marketplace/v/electropol-fr.abriand-sin?icon=visualstudio" alt="vs-marketplace version"></a>
<a href="https://github.com/FrankSAURET/abriand-sin"><img src="https://badgen.net/github/last-commit/FrankSAURET/abriand-sin?icon=github" alt="Github last commit"></a>
<img src="https://badgen.net/vs-marketplace/i/electropol-fr.abriand-sin" alt="vs-marketplace installs">
<img src="https://badgen.net/vs-marketplace/d/electropol-fr.abriand-sin" alt="vs-marketplace downloads">
<img src="https://badgen.net/vs-marketplace/rating/electropol-fr.abriand-sin" alt="vs-marketplace rating">
</p>

![Logo](image/Abriand-SIN.png)

## Description
* Fournis les outils nécessaires pour développer correctement en **Python**. 
* Fournis **kablix** un simulateur pico pi / arduino.
* Fournis les outils pour programmer en **html** et **css**.
* Fournis une extension (Algorithme Français) pour créer des algorithmes en français.
* Fournis **Arduino VsCode IDE** pour compiler et téléverser vers les cartes Arduino.
* Fournis **Éditer des diagrammes avec draw.io** pour créer et modifier des schémas draw.io.
* Charge les modules Python nécessaires pour l'année de SIN (turtle, pyqt6, pyserial).
* Facilite le codage avec :
    * Indentation automatique, 
    * Extrait de code, 
    * Amélioration des commentaires (voir exemples ci-dessous),
    * Quelques snippets.
* Configuration du poste de travail - lancer la commande **F1** puis « **abriand-sin : configurer** ».
* Pour lancer le tuto, faire : « Aide > Prise en main > Ouvrir une procédure pas à pas... » et choisir « Bien commencer en SIN avec Visual Studio ».


## Extensions dans ce pack
### Mise en forme
* [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) - Améliorez vos commentaires de code en annotant avec des alertes, des informations, des tâches à faire et plus encore !
* [Power Header](https://marketplace.visualstudio.com/items?itemName=epivision.vscode-file-header) - Ajout d'en-tête automatique.
* [Colored Theme](https://marketplace.visualstudio.com/items?itemName=electropol-fr.coloredtheme) - Colore les barres de VS Code pour distinguer les fenêtres d'un coup d'œil.
### Python
* [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) - IntelliSense (Pylance), Linting, Débogage (multithread, à distance), Jupyter Notebooks, formatage de code, refactorisation, tests unitaires, etc.
* [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance) - Un serveur de langage performant et riche en fonctionnalités pour Python dans VS Code
* [Python Indent](https://marketplace.visualstudio.com/items?itemName=KevinRose.vsc-python-indent) - Corriger l'indentation Python.
* [Python Docstring Generator](https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring) - Génération rapide de docstring avec """
### Microcontrôleurs
* [Kablix](https://marketplace.visualstudio.com/items?itemName=electropol-fr.kablix) - Simulateur de microcontrôleurs (Arduino Uno / Raspberry Pi Pico) 100 % hors ligne.
* [Arduino VsCode IDE](https://marketplace.visualstudio.com/items?itemName=electropol-fr.arduino-vscode-ide) - Compilation et téléversement Arduino depuis VS Code (basé sur arduino-cli).
* [Raspberry Pi Pico](https://marketplace.visualstudio.com/items?itemName=raspberry-pi.raspberry-pi-pico) - Développement pour Raspberry Pi Pico.
### Aide au codage
* [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - Complétion automatique des chemins de fichiers.
* [Algorithme Français](https://marketplace.visualstudio.com/items?itemName=edigrp.pseudo-code-french) - Écrire des algorithmes en pseudo-code français.
* [Éditer des diagrammes avec draw.io](https://marketplace.visualstudio.com/items?itemName=electropol-fr.drawio-diagrams-editor) - Éditez vos diagrammes draw.io (app.diagrams.net) directement dans VS Code.
### Web
* [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css) - Visual Studio Code CSS Intellisense pour HTML
* [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) - Prévisualiser les fichiers HTML dans un serveur local tout en les éditant dans VSCode

## Confidentialité et données personnelles
Ce pack est destiné à des élèves, dont des mineurs. Voici ce qui est configuré et ce qui peut sortir du poste.

### Télémétrie désactivée par la commande « configurer »
La commande « **abriand-sin : configurer** » écrit `telemetry.telemetryLevel` à `off` dans les paramètres **utilisateur** (global, tous les espaces de travail). Aucune confirmation n'est demandée : le but est de protéger l'élève. Les extensions Microsoft du pack (Python, Pylance, Live Preview) respectent ce réglage et n'envoient alors plus de données d'usage ni d'erreurs. Pour la réactiver : Paramètres > « telemetry.telemetryLevel » > `all`. Tant que la commande n'a pas été lancée, ces extensions peuvent envoyer à Microsoft (hors Union européenne) un identifiant de machine, l'adresse IP, des événements d'usage et des rapports d'erreurs.

### Connexions réseau restantes (même télémétrie coupée)
Ces connexions ne portent pas de données de l'élève, mais le serveur contacté voit l'adresse IP et l'agent utilisateur.

| Extension | Serveur | Raison |
|---|---|---|
| ABriand SIN | pypi.org | Installation des modules Python (pip), après accord de l'élève. |
| Raspberry Pi Pico | github.com, api.github.com, bootstrap.pypa.io | Téléchargement du SDK, des outils de construction et de pip. |
| Arduino VsCode IDE | api.github.com, github.com, mcudude.github.io | Version et téléchargement d'arduino-cli, index de cartes. |
| Kablix | registry.npmjs.org, raw.githubusercontent.com, micropython.org | Vérification des mises à jour (démarrage), composants, micrologiciel. |
| Éditer des diagrammes avec draw.io | api.github.com | Vérification de version, au plus une fois par 24 h. |

### Cas particulier : draw.io en ligne
Par défaut, draw.io fonctionne **hors ligne**. Si l'élève désactive ce mode, le contenu des diagrammes transite par `embed.diagrams.net`.

### Information de l'élève
L'établissement ou l'enseignant doit informer les élèves (et leurs représentants légaux pour les mineurs) de ces traitements, par exemple dans le règlement intérieur ou la charte informatique.
