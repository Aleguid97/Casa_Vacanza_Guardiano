import { useState } from "react";
import Sezione from "../components/Sezione";
import { RECAPITI } from "../data/sito";

const statoIniziale = {
  nome: "",
  email: "",
  telefono: "",
  arrivo: "",
  partenza: "",
  ospiti: "2",
  messaggio: "",
};

// Data locale in formato YYYY-MM-DD (toISOString userebbe UTC)
const oggi = () => new Date().toLocaleDateString("sv-SE");

function valida(dati) {
  const errori = {};
  if (!dati.nome.trim()) errori.nome = "Inserisci il tuo nome.";
  if (!/^\S+@\S+\.\S+$/.test(dati.email))
    errori.email = "Inserisci un'email valida.";
  if (!dati.arrivo) errori.arrivo = "Scegli la data di arrivo.";
  else if (dati.arrivo < oggi())
    errori.arrivo = "La data di arrivo non può essere nel passato.";
  if (!dati.partenza) errori.partenza = "Scegli la data di partenza.";
  else if (dati.arrivo && dati.partenza <= dati.arrivo)
    errori.partenza = "La partenza deve essere successiva all'arrivo.";
  const ospiti = Number(dati.ospiti);
  if (!Number.isInteger(ospiti) || ospiti < 1)
    errori.ospiti = "Indica almeno un ospite.";
  return errori;
}

function costruisciGmail(dati) {
  const oggetto = `Richiesta disponibilità dal ${dati.arrivo} al ${dati.partenza}`;
  const corpo = [
    `Nome: ${dati.nome}`,
    `Email: ${dati.email}`,
    dati.telefono && `Telefono: ${dati.telefono}`,
    `Arrivo: ${dati.arrivo}`,
    `Partenza: ${dati.partenza}`,
    `Ospiti: ${dati.ospiti}`,
    "",
    dati.messaggio,
  ]
    .filter((riga) => riga !== false && riga !== undefined)
    .join("\n");
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    RECAPITI.email,
  )}&su=${encodeURIComponent(oggetto)}&body=${encodeURIComponent(corpo)}`;
}

function Campo({ id, label, errore, children }) {
  return (
    <div className="flex flex-col gap-1 text-left">
      <label htmlFor={id} className="text-sm font-medium text-white">
        {label}
      </label>
      {children}
      {errore && (
        <p id={`${id}-errore`} className="text-sm text-red-100">
          {errore}
        </p>
      )}
    </div>
  );
}

const classeInput = (errore) =>
  `w-full rounded-md border bg-white px-3 py-2 text-slate-900 [color-scheme:light] focus:outline-none focus:ring-2 focus:ring-corallo ${
    errore ? "border-red-400" : "border-transparent"
  }`;

function Contatti() {
  const [dati, setDati] = useState(statoIniziale);
  const [errori, setErrori] = useState({});
  const [inviato, setInviato] = useState(false);

  const aggiorna = (e) => {
    const { name, value } = e.target;
    setDati((prec) => ({ ...prec, [name]: value }));
    if (errori[name]) setErrori((prec) => ({ ...prec, [name]: undefined }));
  };

  const invia = (e) => {
    e.preventDefault();
    const nuoviErrori = valida(dati);
    setErrori(nuoviErrori);
    if (Object.keys(nuoviErrori).length > 0) return;
    window.open(costruisciGmail(dati), "_blank", "noopener,noreferrer");
    setInviato(true);
  };

  const attributiCampo = (nome) => ({
    id: nome,
    name: nome,
    value: dati[nome],
    onChange: aggiorna,
    className: classeInput(errori[nome]),
    "aria-invalid": Boolean(errori[nome]),
    "aria-describedby": errori[nome] ? `${nome}-errore` : undefined,
  });

  return (
    <Sezione id="modulo-contatti">
      <div className="mx-auto max-w-2xl">
        <form
          onSubmit={invia}
          noValidate
          className="space-y-4 rounded-2xl bg-mare p-6 shadow-lg md:p-8"
        >
          <h2 className="text-left text-2xl font-semibold text-white">
            Richiedi disponibilità
          </h2>

          {inviato && (
            <p
              role="status"
              className="rounded-md bg-green-50 px-3 py-2 text-left text-sm text-green-800"
            >
              Abbiamo aperto Gmail con la richiesta già compilata: invia l'email
              per completare.
            </p>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <Campo id="nome" label="Nome e cognome *" errore={errori.nome}>
              <input
                type="text"
                autoComplete="name"
                {...attributiCampo("nome")}
              />
            </Campo>
            <Campo id="email" label="Email *" errore={errori.email}>
              <input
                type="email"
                autoComplete="email"
                {...attributiCampo("email")}
              />
            </Campo>
            <Campo id="telefono" label="Telefono" errore={errori.telefono}>
              <input
                type="tel"
                autoComplete="tel"
                {...attributiCampo("telefono")}
              />
            </Campo>
            <Campo id="ospiti" label="Ospiti *" errore={errori.ospiti}>
              <input type="number" min="1" {...attributiCampo("ospiti")} />
            </Campo>
            <Campo id="arrivo" label="Arrivo *" errore={errori.arrivo}>
              <input type="date" min={oggi()} {...attributiCampo("arrivo")} />
            </Campo>
            <Campo id="partenza" label="Partenza *" errore={errori.partenza}>
              <input
                type="date"
                min={dati.arrivo || oggi()}
                {...attributiCampo("partenza")}
              />
            </Campo>
          </div>

          <Campo id="messaggio" label="Messaggio" errore={errori.messaggio}>
            <textarea rows="4" {...attributiCampo("messaggio")} />
          </Campo>

          <button
            type="submit"
            className="w-full rounded-full bg-corallo px-8 py-3 font-semibold text-white transition-colors hover:bg-corallo-scuro sm:w-auto"
          >
            Invia richiesta
          </button>
        </form>
      </div>
    </Sezione>
  );
}

export default Contatti;
