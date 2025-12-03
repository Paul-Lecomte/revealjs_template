# Utilisation du Template Reveal.js

## Démarrer un serveur local

Choisissez une des options suivantes:

### Option A: Node.js (recommandé si disponible)

1. Installer `serve` si besoin:
   ```powershell
   npx serve . -l 8080
   ```
2. Ouvrir dans le navigateur: `http://localhost:8080`

### Option B: .NET

1. Installer l'outil:
   ```powershell
   dotnet tool install -g dotnet-serve
   ```
2. Lancer le serveur:
   ```powershell
   dotnet-serve -p 8080
   ```
3. Ouvrir: `http://localhost:8080`

## Modifier le contenu

- Éditez `slides.md`: chaque `---` crée une nouvelle slide, `--` une sous‑slide.
- Ajoutez des notes avec `Note:` qui apparaissent dans la vue présentateur (touche `s`).

## Changer le thème

- Remplacez l'URL dans la balise `<link id="reveal-theme" ...>` de `index.html`.
- Thèmes disponibles via CDN: `black`, `white`, `league`, `beige`, `night`, `moon`, `serif`, `simple`, `solarized`.

## Fragments

- Ajoutez la classe `fragment` aux éléments pour les dévoiler progressivement.

## Arrière‑plans

- Utilisez des attributs sur les `<section>`: `data-background-color`, `data-background-image`, `data-background-video`.

## Export PDF

1. Ouvrez `http://localhost:8080/?print-pdf`.
2. Imprimez via le navigateur et choisissez « Enregistrer en PDF ».

## Raccourcis utiles

- `s`: Ouvrir les notes du présentateur.
- `t`: Réinitialiser le timer.
- Flèches / espace: navigation.

