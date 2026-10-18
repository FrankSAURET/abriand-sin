# A faire
1. ⬜ (rien en attente)

## Pour plus tard
1. ⏳ Créer des profils html/arduino/python/microbit
1. ⏳ Rendre les chemins linux compatibles
1. ⏳ Capture réseau réelle (Fiddler/Wireshark) pour confirmer l'audit de télémétrie
1. ⏳ Remplacer Live Preview (télémétrie Microsoft à clé fixe) par une alternative sans collecte

# 2026.9.0.3
1. ✅ Audit de télémétrie du pack et de ses extensions (analyse statique) — classement RGPD fait en conversation.
1. ✅ README : section « Confidentialité et données personnelles » (réglage global `telemetry.telemetryLevel: off` écrit par « configurer », connexions réseau, draw.io en ligne, information des élèves).
1. ✅ CHANGELOG : section `2026.10.0 (prochaine publication)`, ligne PyQt Integration déplacée dedans.
1. ℹ️ Audit abriand-it-2i2d / abriand-snt : aucune télémétrie. it-2i2d ne fait que fixer l'interpréteur Python. snt installe `pillow folium` via pip. Le pack it-2i2d inclut `comment-translate` (envoie les commentaires survolés au service de traduction choisi ; ici DeepL) et `color-manager` (aucun réseau).

# 2026.8.0.1
1. ✅ Aucune traduction de ce projet, il reste en français uniquement — ajouté aux contraintes locales (`CLAUDE.md` à la racine).
1. ✅ Passage au calver : `version` = `2026.8.0`, `buildNumber` = `2026.8.0.1`.
1. ✅ Ajout de `electropol-fr.drawio-diagrams-editor` à l'`extensionPack`.
1. ℹ️ `electropol-fr.arduino-vscode-ide` était déjà ajouté (travail non commité de la session précédente) — conservé et documenté.
1. ✅ Mise à jour du README : description + section « Extensions dans ce pack » remise à jour (IntelliCode retiré, Colored Theme / Path Intellisense / Algorithme Français / Raspberry Pi Pico / Kablix / Arduino / draw.io ajoutés).
1. ✅ Mise à jour du CHANGELOG (entrée `2026.8.0` remplaçant la `0.4.8`).
