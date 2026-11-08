import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import LogoCorallo from "../components/LogoCorallo";
import BadgePosizione from "../components/BadgePosizione";
import Sezione from "../components/Sezione";
import Punti from "../components/Punti";
import Ambienti from "../components/Ambienti";
import Galleria from "../components/Galleria";
import Recensioni from "../components/Recensioni";
import BandaCta from "../components/BandaCta";
import Mappa from "../components/Mappa";
import { SITO } from "../data/sito";
import { ambienti } from "../data/casa";
import { foto } from "../data/galleria";
import { recensioni } from "../data/recensioni";

// Distanze dichiarate nella scheda della struttura (stime del portale)
const vicini = [
  { nome: "Spiaggia di Caucana e Casuzze", distanza: "1,2 km" },
  { nome: "Spiaggia di Marina di Ragusa", distanza: "1,8 km" },
  { nome: "Castello di Donnafugata", distanza: "14 km" },
];

const punti = [
  {
    titolo: "Fronte spiaggia",
    testo: "La casa si affaccia direttamente sul mare: dalla grande terrazza e dal giardino si ascoltano le onde dalla colazione alla cena.",
  },
  {
    titolo: "Cucina completa",
    testo: "Forno, piano cottura, macchina del caffè, lavatrice e tutto il necessario per vivere la casa in autonomia.",
  },
  {
    titolo: "Comoda per le famiglie",
    testo: "Fino a 4 ospiti, due camere e due bagni, seggiolone, culla su richiesta e parcheggio gratuito.",
  },
];

function Home() {
  return (
    <>
      <Hero
        etichetta="Marina di Ragusa"
        titolo={SITO.nome}
        sottotitolo="Una casa vacanze fronte spiaggia, con una grande terrazza affacciata sul mare e il rumore delle onde a ogni ora del giorno."
        immagine="/img/hero.svg"
      >
        <BadgePosizione />
      </Hero>

      <div className="relative z-10 -mt-12 flex justify-center">
        <LogoCorallo dimensione={96} titolo={`Logo di ${SITO.nome}`} className="shadow-xl ring-8 ring-sabbia" />
      </div>

      <Sezione titolo="Perché sceglierci" sottotitolo="Tre motivi per cui gli ospiti tornano.">
        <Punti punti={punti} />
      </Sezione>

      <Sezione id="la-veranda" sfondo="bg-superficie">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src="/img/chi-siamo.svg"
            alt="La veranda sul mare"
            loading="lazy"
            className="aspect-4/5 w-full rounded-2xl object-cover"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-corallo-testo">La casa</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Una veranda sul mare</h2>
            <p className="mt-4 text-inchiostro/80">
              La veranda è il cuore della casa: ampia e attrezzata, si affaccia direttamente sul mare ed è il
              posto giusto per la colazione, una lettura o una cena a lume di candela con il rumore delle onde.
            </p>
            <p className="mt-3 text-inchiostro/80">
              La casa è gestita direttamente dai proprietari, che accolgono gli ospiti di persona. Su richiesta
              organizzano anche la navetta da e per l'aeroporto, con un servizio a pagamento.
            </p>
            <Link
              to="/contatti"
              className="mt-6 inline-block rounded-full bg-mare px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-mare-scuro"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </Sezione>

      <Sezione titolo="La casa" sottotitolo="Terrazza fronte mare, due camere, cucina attrezzata e due bagni.">
        <Ambienti ambienti={ambienti} />
        <p className="mt-8 text-center">
          <Link to="/la-casa" className="font-semibold text-mare-testo underline underline-offset-4 hover:text-titoli">
            Scopri tutta la casa
          </Link>
        </p>
      </Sezione>

      <Sezione titolo="Uno sguardo alla casa" sfondo="bg-superficie">
        <Galleria foto={foto} />
      </Sezione>

      <Sezione titolo="Cosa dicono gli ospiti" sottotitolo="Le valutazioni di chi ha già soggiornato qui." ornamento>
        <Recensioni dati={recensioni} />
      </Sezione>

      <Sezione
        titolo="Marina di Ragusa e dintorni"
        sottotitolo="Un borgo marinaro con una storia lunga secoli e, a pochi chilometri, borghi, riserve e città barocche."
        sfondo="bg-superficie"
      >
        <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
          {vicini.map((luogo) => (
            <li key={luogo.nome} className="rounded-2xl bg-sabbia p-5 text-center">
              <p className="font-titolo text-2xl font-semibold text-corallo-testo">{luogo.distanza}</p>
              <p className="mt-1 text-sm font-medium text-inchiostro/80">{luogo.nome}</p>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-center text-xs text-inchiostro/70">Distanze indicative dalla casa.</p>
        <p className="mt-6 text-center">
          <Link
            to="/territorio"
            className="inline-block rounded-full bg-mare px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-mare-scuro"
          >
            Scopri la storia e i luoghi da visitare
          </Link>
        </p>
      </Sezione>

      <BandaCta
        titolo="Pronto a prenotare il tuo soggiorno?"
        testo="Scrivici le date e il numero di ospiti: ti rispondiamo con la disponibilità."
      />

      <Sezione titolo="Dove siamo" ornamento>
        <Mappa />
      </Sezione>
    </>
  );
}

export default Home;
