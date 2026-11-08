import { useState } from "react";
import { Link } from "react-router-dom";
import Sezione from "../components/Sezione";
import Faq from "../components/Faq";
import { BONIFICO } from "../data/sito";
import { domande } from "../data/faq";

const passi = [
  {
    titolo: "Richiedi la disponibilità",
    testo: "Compila il modulo nella pagina Contatti con date di arrivo e partenza e numero di ospiti.",
  },
  {
    titolo: "Ricevi la conferma",
    testo: "Il proprietario verifica il calendario e ti risponde con la conferma e il costo del soggiorno.",
  },
  {
    titolo: "Versa la caparra",
    testo: "Per bloccare le date si paga con bonifico anticipato, con i dati qui sotto.",
  },
  {
    titolo: "Arriva e rilassati",
    testo: "Ti inviamo le indicazioni per l'arrivo. Ricordati di comunicare l'orario previsto: si arriva dalle 14:00 alle 20:00.",
  },
];

function ComePrenotare() {
  const [copiato, setCopiato] = useState(false);

  const copiaIban = async () => {
    try {
      await navigator.clipboard.writeText(BONIFICO.iban.replace(/\s/g, ""));
      setCopiato(true);
      setTimeout(() => setCopiato(false), 2000);
    } catch {
      setCopiato(false);
    }
  };

  return (
    <>
      <Sezione titolo="Come prenotare" sottotitolo="Quattro passi, senza intermediari e senza commissioni.">
        <ol className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {passi.map((passo, indice) => (
            <li key={passo.titolo} className="flex gap-4 rounded-2xl bg-superficie p-5 shadow-sm">
              <span className="font-titolo text-3xl font-semibold text-corallo-testo">{indice + 1}</span>
              <div>
                <h3 className="text-lg font-semibold">{passo.titolo}</h3>
                <p className="mt-1 text-sm text-inchiostro/75">{passo.testo}</p>
              </div>
            </li>
          ))}
        </ol>
      </Sezione>

      <Sezione titolo="Dati per il bonifico" sfondo="bg-superficie">
        <div className="mx-auto max-w-2xl rounded-2xl border border-sabbia-scuro bg-sabbia p-6">
          <dl className="space-y-4">
            <div>
              <dt className="text-sm font-medium text-inchiostro/70">Intestatario</dt>
              <dd className="font-medium">{BONIFICO.intestatario}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-inchiostro/70">IBAN</dt>
              <dd className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-lg font-semibold">{BONIFICO.iban}</span>
                <button
                  type="button"
                  onClick={copiaIban}
                  className="rounded-full border border-mare-testo px-4 py-1.5 text-sm font-semibold text-mare-testo transition-colors hover:bg-mare hover:text-white"
                >
                  {copiato ? "Copiato" : "Copia IBAN"}
                </button>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-inchiostro/70">Banca</dt>
              <dd>{BONIFICO.banca}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-inchiostro/70">Importo della caparra</dt>
              <dd>{BONIFICO.caparra}</dd>
            </div>
          </dl>
          <p className="mt-5 text-sm text-inchiostro/70">
            Nella causale indica il tuo nome e le date del soggiorno. Il bonifico non vale come
            prenotazione finché il proprietario non ha confermato la disponibilità.
          </p>
        </div>

        <p className="mt-8 text-center">
          <Link
            to="/contatti"
            className="inline-block rounded-full bg-corallo px-8 py-3 font-semibold text-white transition-colors hover:bg-corallo-scuro"
          >
            Richiedi disponibilità
          </Link>
        </p>
      </Sezione>

      <Sezione titolo="Domande frequenti" sottotitolo="Le risposte alle domande che ci fanno più spesso." ornamento>
        <Faq domande={domande} />
      </Sezione>
    </>
  );
}

export default ComePrenotare;
