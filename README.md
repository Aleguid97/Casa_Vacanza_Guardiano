# Terrazza a mare Corallo

Sito della casa vacanze a Marina di Ragusa (React, Redux Toolkit, Tailwind, Vite).

## Comandi
- `npm install`: installa le dipendenze
- `npm run dev`: avvio in locale
- `npm run dev -- --host`: avvio visibile dal telefono
- `npm run build`: build in `dist/`
- `npm run preview -- --host`: anteprima della build

## Dove si cambiano le cose
- `src/data/sito.js`: nome, recapiti, IBAN, CIR/CIN, mappa
- `src/data/`: testi della casa, FAQ, galleria, territorio, recensioni
- `public/img/`: immagini (qui vanno le foto vere)
- `src/data/palette.js` e `index.html`: palette predefinita

## Flusso di lavoro
`main` è sempre pubblicabile. Ogni modifica si fa su un branch (`git switch -c nome`), si controlla in locale e poi si unisce in `main`.
