import Sezione from "../components/Sezione";
import Ambienti from "../components/Ambienti";
import GruppiServizi from "../components/GruppiServizi";
import BandaCta from "../components/BandaCta";
import { numeri, ambienti, servizi, informazioni } from "../data/casa";

function LaCasa() {
  return (
    <>
      <Sezione
        titolo="La casa"
        sottotitolo="Un alloggio indipendente al piano terra, fronte spiaggia, con una grande terrazza sul mare e un giardino."
      >
        <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {numeri.map((voce) => (
            <li key={voce.etichetta} className="rounded-2xl bg-superficie p-5 text-center shadow-sm">
              <p className="font-titolo text-2xl font-semibold text-corallo-testo">{voce.valore}</p>
              <p className="mt-1 text-sm text-inchiostro/75">{voce.etichetta}</p>
            </li>
          ))}
        </ul>
      </Sezione>

      <Sezione titolo="Gli ambienti" sfondo="bg-superficie">
        <Ambienti ambienti={ambienti} />
      </Sezione>

      <Sezione titolo="Cosa trovi in casa" sottotitolo="Tutto il necessario per vivere la casa in autonomia.">
        <GruppiServizi gruppi={servizi} />
      </Sezione>

      <Sezione titolo="Informazioni utili" sfondo="bg-superficie">
        <dl className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {informazioni.map((voce) => (
            <div key={voce.etichetta} className="rounded-2xl bg-sabbia p-5">
              <dt className="text-sm font-medium text-inchiostro/70">{voce.etichetta}</dt>
              <dd className="mt-1 font-medium">{voce.valore}</dd>
            </div>
          ))}
        </dl>
      </Sezione>

      <BandaCta
        titolo="Vuoi sapere se è libera?"
        testo="Indicaci le date e il numero di ospiti, ti confermiamo la disponibilità."
      />
    </>
  );
}

export default LaCasa;
