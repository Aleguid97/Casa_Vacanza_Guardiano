// Elenco delle palette per il selettore dei colori. I colori veri sono in src/index.css.
// Oggi c'è una sola palette, presa dai colori del logo (chiara e scura): con una sola voce
// il selettore mostra soltanto la scelta del tema. Per aggiungerne altre servono una voce qui
// e un blocco :root[data-palette="id"] in src/index.css.
export const PALETTE = [
  {
    id: "logo",
    nome: "Blu del logo",
    descrizione: "Blu notte, azzurro delle vele e blu del simbolo",
  },
];

export const PALETTE_PREDEFINITA = "logo";
