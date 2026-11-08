// Dati della casa, ricavati dalla scheda della struttura su Booking.com (novembre 2026).

export const numeri = [
  { valore: "Fronte spiaggia", etichetta: "sul mare di Marina di Ragusa" },
  { valore: "4 ospiti", etichetta: "un letto matrimoniale e un divano letto" },
  { valore: "2 + 2", etichetta: "camere da letto e bagni" },
  { valore: "75 m²", etichetta: "con terrazza e giardino" },
];

// Immagini di esempio: sostituisci i file in public/img con le foto vere.
export const ambienti = [
  {
    id: "terrazza",
    nome: "Terrazza e giardino",
    descrizione:
      "Una veranda ampia e attrezzata, affacciata sul mare: colazione, lettura o cena a lume di candela con il rumore delle onde.",
    immagine: "/img/terrazza.svg",
    dotazioni: ["Terrazza solarium", "Zona pranzo all'aperto", "Ombrelloni e lettini", "Giardino"],
  },
  {
    id: "camera-matrimoniale",
    nome: "Camera matrimoniale",
    letto: "Letto matrimoniale",
    descrizione: "Una camera tranquilla e insonorizzata per riposare, con armadio e zanzariere.",
    immagine: "/img/camera-matrimoniale.svg",
    dotazioni: ["Armadio", "Zanzariere", "Aria condizionata"],
  },
  {
    id: "camera-divano",
    nome: "Seconda camera",
    letto: "Divano letto",
    descrizione: "Una seconda camera con divano letto, comoda per altri due ospiti o per i bambini.",
    immagine: "/img/camera-divano.svg",
    dotazioni: ["Divano letto", "Zanzariere", "Culla su richiesta"],
  },
  {
    id: "cucina",
    nome: "Cucina e soggiorno",
    descrizione:
      "Una cucina attrezzata per cucinare con calma e una zona pranzo con divano e TV a schermo piatto.",
    immagine: "/img/cucina.svg",
    dotazioni: ["Forno e piano cottura", "Lavatrice", "Macchina del caffè", "Seggiolone"],
  },
];

export const servizi = [
  {
    titolo: "Cucina",
    voci: [
      "Angolo cottura, piano cottura e forno",
      "Frigorifero",
      "Macchina del caffè e bollitore elettrico",
      "Tostapane",
      "Utensili da cucina",
      "Tavolo da pranzo e seggiolone",
      "Lavatrice",
      "Prodotti per la pulizia",
    ],
  },
  {
    titolo: "Due bagni",
    voci: [
      "Un bagno privato e uno aggiuntivo",
      "Doccia o vasca",
      "Bidet",
      "Asciugacapelli",
      "Prodotti da bagno in omaggio",
      "Asciugamani",
    ],
  },
  {
    titolo: "Camere e comfort",
    voci: [
      "Biancheria da letto",
      "Armadio e spogliatoio",
      "Aria condizionata e riscaldamento",
      "Zanzariere e insonorizzazione",
      "TV a schermo piatto",
      "Ferro e set da stiro, stendibiancheria",
    ],
  },
  {
    titolo: "All'aperto",
    voci: [
      "Fronte spiaggia",
      "Terrazza solarium, patio, balcone e giardino",
      "Arredamento da esterni e zona pranzo all'aperto",
      "Ombrelloni e lettini",
      "Parcheggio gratuito in strada, senza prenotazione",
    ],
  },
  {
    titolo: "Per le famiglie",
    voci: [
      "Bambini di tutte le età benvenuti",
      "Seggiolone",
      "Cancelletti di sicurezza",
      "Libri e DVD per bambini",
      "Culla su richiesta, 15 € a notte",
    ],
  },
  {
    titolo: "Servizi",
    voci: [
      "Wifi gratuito in tutta la casa",
      "Navetta da e per l'aeroporto, a pagamento",
      "Fattura su richiesta",
      "Ingresso privato, tutto al piano terra",
      "Telecamere di sicurezza all'esterno della struttura",
      "Si parla italiano, inglese e spagnolo",
    ],
  },
];

export const informazioni = [
  { etichetta: "Arrivo", valore: "Dalle 14:00 alle 20:00, comunicando l'orario in anticipo" },
  { etichetta: "Partenza", valore: "Dalle 8:00 alle 10:00" },
  { etichetta: "Ospiti", valore: "Fino a 4, con un letto matrimoniale e un divano letto" },
  { etichetta: "Ore di silenzio", valore: "Dalle 14:00 alle 16:00" },
  { etichetta: "Animali", valore: "Non ammessi" },
  { etichetta: "Fumo", valore: "Casa non fumatori" },
  { etichetta: "Bambini", valore: "Benvenuti di ogni età. Dai 4 anni si paga come un adulto" },
  { etichetta: "Culla (0-3 anni)", valore: "Su richiesta, 15 € a notte, da pagare a parte" },
  { etichetta: "Navetta aeroportuale", valore: "Da e per l'aeroporto, a pagamento, organizzata dalla struttura" },
  { etichetta: "Pagamento", valore: "Bonifico anticipato prima dell'arrivo" },
];
