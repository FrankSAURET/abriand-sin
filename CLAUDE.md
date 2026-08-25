# Contraintes locales — abriand-sin

## Langue
- **Projet monolingue français.** Aucune traduction, aucune localisation.
- Pas de fichiers `l10n`/`i18n`, pas de `package.nls.*.json`, pas de README ni de docs traduits.
- La règle globale « traductions avant publication » ne s'applique pas ici : il n'y a rien à traduire.
- Toutes les chaînes d'interface, la doc et le CHANGELOG restent en français.

## Versions
- Calver conforme aux règles globales : `version` publique `ANNÉE.MOIS.incrément`, `buildNumber` à 4 segments.
- Le compteur de `buildNumber` ne repart jamais à zéro.

## Publication
- Publisher : `electropol-fr`.
- Aucune publication (`vsce publish`, `ovsx`) ni build `.vsix` sans accord explicite de Frank.
