// Pannello per provare le palette di colori. Quando il proprietario ha scelto, metti false.
export const MOSTRA_SELETTORE_TEMA = true;

// Logo nel menu in alto: "solo-logo" mostra solo il logo, grande e sporgente dalla barra, che
// si rimpicciolisce scorrendo la pagina; "con-nome" mostra il logo piccolo accanto al nome.
export const STILE_LOGO_NAVBAR = "solo-logo";

export const SITO = {
  nome: "Terrazza a mare Corallo",
  slogan: "Casa vacanze fronte spiaggia a Marina di Ragusa",
};

// TODO: completare telefono e WhatsApp (non presenti nella scheda Booking)
export const RECAPITI = {
  email: "aleguid97@gmail.com",
  telefono: "+39 000 000 0000",
  indirizzo: "Via Firenze, 97010 Marina di Ragusa (RG)",
  // Numero WhatsApp in formato internazionale, senza + e senza spazi
  whatsapp: "390000000000",
};

// Codici obbligatori da mostrare anche sul sito diretto (presi dalla scheda Booking
// della struttura): da far confermare al proprietario prima di pubblicare.
export const CODICI = {
  cir: "19088009C204596",
  cin: "IT088009C2YJ6UQB4C",
};

// TODO: dati reali per il bonifico della caparra
export const BONIFICO = {
  intestatario: "Nome e cognome dell'intestatario",
  iban: "IT00 X000 0000 0000 0000 0000 000",
  banca: "Nome della banca",
  caparra: "da concordare con il proprietario",
};

// Mappa: se vuoi la mappa esatta, su Google Maps scegli Condividi, Incorpora una mappa
// e incolla qui solo il valore di src="...". Se resta vuoto, la mappa si cerca per indirizzo.
export const MAPPA_SRC = "";

const QUERY = encodeURIComponent("Via Firenze, 97010 Marina di Ragusa, Italia");
export const MAPPA_PER_INDIRIZZO = `https://www.google.com/maps?q=${QUERY}&output=embed`;
export const LINK_MAPPA = `https://www.google.com/maps/search/?api=1&query=${QUERY}`;
export const LINK_INDICAZIONI = `https://www.google.com/maps/dir/?api=1&destination=${QUERY}`;
