// Contenuti della pagina "Il territorio".
// Fonti consultate: Wikipedia (Marina di Ragusa), Balarm.it, documenti del Comune di Ragusa,
// Quotidiano di Ragusa, scheda Booking della casa. Le distanze di Punta Secca e del Castello di
// Donnafugata sono quelle dichiarate da Booking dalla casa; le altre sono dal centro del borgo.

export const storia = [
  {
    quando: "Preistoria",
    titolo: "I primi abitanti",
    testo:
      "A Fontana Nuova, poco lontano dall'abitato, un riparo sotto roccia conserva le tracce di gruppi umani vissuti circa venticinquemila anni fa.",
  },
  {
    quando: "V secolo a.C.",
    titolo: "Un approdo greco",
    testo:
      "Sulle rive del vicino fiume Irminio sorge un insediamento legato a Kamarina, che usa il corso d'acqua come canale e porto.",
  },
  {
    quando: "Età bizantina",
    titolo: "Un molo per le merci",
    testo:
      "Il luogo è già conosciuto come punto di imbarco: un molo di carico serve a spedire i prodotti della zona.",
  },
  {
    quando: "Età araba",
    titolo: "Il piccolo porto",
    testo:
      "Il geografo al-Idrisi lo ricorda con un nome che vuol dire piccolo porto. Da quel significato deriva Mazzarelli, il nome con cui il borgo sarà chiamato per secoli.",
  },
  {
    // Fonti discordanti: Wikipedia indica 1584 e 1596, Balarm parla di XVII secolo.
    // Verificare con il Comune prima di pubblicare una data precisa.
    quando: "Fine del Cinquecento",
    titolo: "La Torre Cabrera",
    testo:
      "Per difendere la costa dalle navi dei corsari il conte Cabrera fa costruire una torre di guardia accanto al porto. Intorno alla torre comincia a crescere il borgo.",
  },
  {
    quando: "Dal 1870",
    titolo: "Il porto dell'asfalto",
    testo:
      "Fino ad allora era un tranquillo villaggio di pescatori e contadini. Poi dal porto partono per le capitali europee grandi carichi di asfalto, estratto nelle cave di Ragusa.",
  },
  {
    quando: "Tra Ottocento e Novecento",
    titolo: "Le prime case di villeggiatura",
    testo:
      "Arrivano le famiglie aristocratiche di Ragusa e compaiono le prime case costruite per le vacanze al mare.",
  },
  {
    quando: "1928",
    titolo: "Nasce Marina di Ragusa",
    testo: "Il consiglio comunale sostituisce il vecchio nome Mazzarelli con quello che il borgo porta ancora oggi.",
  },
  {
    quando: "Anni Sessanta",
    titolo: "Il turismo",
    testo: "Il borgo diventa una località di villeggiatura, e da allora non ha più smesso di esserlo.",
  },
  {
    quando: "2009",
    titolo: "Il porto turistico",
    testo:
      "Dopo anni di lavori fermi e poi ripresi, viene inaugurato il nuovo porto, tra i più grandi approdi per la nautica da diporto della Sicilia.",
  },
];

export const inMarina = [
  {
    nome: "Torre Cabrera e Piazza Duca degli Abruzzi",
    descrizione:
      "La torre di guardia affaccia sulla piazza centrale, nel cuore del porto vecchio: da qui è cominciata la storia del borgo.",
  },
  {
    nome: "Lungomare Andrea Doria e spiaggia",
    descrizione:
      "Circa due chilometri di sabbia, dal lungomare al porto nuovo, con tratti attrezzati e spiaggia libera. Il mare è stato più volte premiato con la Bandiera Blu.",
  },
  {
    nome: "Riserva Naturale Foce del Fiume Irminio",
    descrizione:
      "A est del lungomare comincia la spiaggia della riserva, un'area protetta circondata dalla macchia mediterranea.",
  },
  {
    nome: "Il porto turistico",
    descrizione:
      "Un grande approdo per le barche da diporto, con negozi e locali. Ottimo per una passeggiata al tramonto.",
  },
  {
    nome: "Festa di Santa Maria di Portosalvo",
    descrizione:
      "Il 15 agosto la statua della patrona percorre il mare su un peschereccio, seguita da centinaia di barche, con i giochi dei pescatori e i fuochi d'artificio.",
  },
  {
    nome: "Fontana Nuova e grotta di Taddarita",
    descrizione:
      "Alla periferia del borgo, un riparo preistorico sotto roccia e una grotta che custodisce una piccola catacomba.",
  },
];

export const dintorni = [
  {
    nome: "Santa Croce Camerina",
    distanza: "6 km",
    descrizione: "Il comune vicino, punto di riferimento per servizi e commissioni.",
  },
  {
    nome: "Punta Secca",
    distanza: "4,1 km",
    descrizione:
      "Piccolo borgo marinaro con il faro, diventato famoso come uno dei luoghi della serie televisiva Il commissario Montalbano.",
  },
  {
    nome: "Parco archeologico di Caucana",
    distanza: "vicino a Punta Secca",
    descrizione: "I resti dell'antico insediamento di Caucana, a due passi dal mare.",
  },
  {
    nome: "Donnalucata",
    distanza: "11 km",
    descrizione: "Un altro borgo di pescatori sulla costa, con il suo lungomare e il porticciolo.",
  },
  {
    nome: "Castello di Donnafugata",
    distanza: "14 km",
    descrizione:
      "Residenza nobiliare in stile neogotico con un parco di otto ettari, scelta come set per film e serie televisive.",
  },
  {
    nome: "Scicli",
    distanza: "17 km",
    descrizione: "Cittadina barocca della Val di Noto, tra i luoghi della serie del commissario Montalbano.",
  },
  {
    nome: "Fornace Penna a Sampieri",
    distanza: "verso Scicli",
    descrizione:
      "Un'antica fabbrica di laterizi affacciata sul mare, monumento di archeologia industriale e set di diverse scene televisive e cinematografiche.",
  },
  {
    nome: "Ragusa e Ragusa Ibla",
    distanza: "24 km",
    descrizione:
      "Ibla è il cuore barocco ricostruito dopo il terremoto del 1693 e fa parte del patrimonio UNESCO. Da vedere anche i Giardini Iblei e i ponti della città.",
  },
  {
    nome: "Modica",
    distanza: "27 km",
    descrizione: "Città barocca costruita su più livelli, famosa anche per il suo cioccolato.",
  },
];

// Distanze dichiarate nella scheda della struttura su Booking.com (novembre 2026).
// Sono stime del portale: le distanze reali possono variare.
export const dallaCasa = [
  { nome: "Spiaggia di Caucana e Casuzze", distanza: "1,2 km" },
  { nome: "Spiaggia di Marina di Ragusa", distanza: "1,8 km" },
  { nome: "Spiaggia di Punta Secca", distanza: "4,1 km" },
  { nome: "Spiaggia Torre di Mezzo", distanza: "7 km" },
  { nome: "Castello di Donnafugata", distanza: "14 km" },
  { nome: "Aeroporto di Comiso", distanza: "27 km" },
];

export const aPiedi = [
  { nome: "La Lampara", distanza: "250 m", descrizione: "Ristorante." },
  { nome: "Pizzeria a Regola d'Arte", distanza: "400 m", descrizione: "Pizzeria." },
  { nome: "Terrazzo Azzurro", distanza: "950 m", descrizione: "Ristorante." },
  { nome: "Centro sportivo comunale", distanza: "1,4 km", descrizione: "Impianti sportivi." },
];
