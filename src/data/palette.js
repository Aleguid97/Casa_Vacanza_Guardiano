// Elenco delle palette per il selettore dei colori. I colori veri sono in src/index.css:
// questo file serve solo a mostrare nomi e anteprime dei loghi. Per aggiungere o cambiare una palette
// vanno aggiornati entrambi i file.
export const PALETTE = [
  {
    "id": "mediterraneo",
    "nome": "Mediterraneo",
    "descrizione": "Blu notte, crema e corallo: i colori del logo",
    "logo": {
      "chiaro": {
        "sfondo": "#f3e9dc",
        "motivo": "#d9503a",
        "anello": "#0d4463"
      },
      "scuro": {
        "sfondo": "#08263a",
        "motivo": "#ff7f66",
        "anello": "#ff7f66"
      }
    }
  },
  {
    "id": "turchese",
    "nome": "Acqua turchese",
    "descrizione": "Mare cristallino e sole d'ambra",
    "logo": {
      "chiaro": {
        "sfondo": "#e3f3f1",
        "motivo": "#b45309",
        "anello": "#0b6e72"
      },
      "scuro": {
        "sfondo": "#093230",
        "motivo": "#ffc671",
        "anello": "#ffc671"
      }
    }
  },
  {
    "id": "tramonto",
    "nome": "Tramonto",
    "descrizione": "Indaco del mare e arancio del sole che cala",
    "logo": {
      "chiaro": {
        "sfondo": "#fbe9dc",
        "motivo": "#c0402a",
        "anello": "#34406e"
      },
      "scuro": {
        "sfondo": "#221736",
        "motivo": "#ff9a7e",
        "anello": "#ff9a7e"
      }
    }
  },
  {
    "id": "sabbia",
    "nome": "Sabbia e sole",
    "descrizione": "Toni caldi di spiaggia con un tocco di mare",
    "logo": {
      "chiaro": {
        "sfondo": "#f6e8c8",
        "motivo": "#0f766e",
        "anello": "#8a4b12"
      },
      "scuro": {
        "sfondo": "#2a1c0d",
        "motivo": "#72e3d5",
        "anello": "#f2c892"
      }
    }
  },
  {
    "id": "alba",
    "nome": "Alba",
    "descrizione": "Azzurro del cielo e pesca delle prime luci",
    "logo": {
      "chiaro": {
        "sfondo": "#e6eff6",
        "motivo": "#c2562d",
        "anello": "#2b6a9e"
      },
      "scuro": {
        "sfondo": "#1a2533",
        "motivo": "#ffb698",
        "anello": "#ffb698"
      }
    }
  }
];

// Palette mostrata a chi non ha ancora scelto. Quando il proprietario decide,
// si cambia qui e nel valore di partenza dello script in index.html.
export const PALETTE_PREDEFINITA = "mediterraneo";
