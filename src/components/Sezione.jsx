import SeparatoreCorallo from "./SeparatoreCorallo";
import Decori from "./Decori";

// decori: il corallo trasparente sparso dietro al contenuto. Le posizioni dipendono dall'id
// (o dal titolo), quindi ogni sezione ha la sua disposizione.
function Sezione({ id, titolo, sottotitolo, sfondo = "", ornamento = false, decori = true, children }) {
  return (
    <section id={id} className={`relative overflow-hidden py-16 md:py-20 ${sfondo}`}>
      {decori && <Decori seme={id ?? titolo ?? "sezione"} />}
      <div className="relative mx-auto max-w-6xl px-4">
        {(titolo || sottotitolo) && (
          <header className="mx-auto mb-10 max-w-2xl text-center">
            {ornamento && <SeparatoreCorallo className="mb-5" />}
            {titolo && <h2 className="text-3xl font-semibold md:text-4xl">{titolo}</h2>}
            {sottotitolo && <p className="mt-3 text-lg text-inchiostro/70">{sottotitolo}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export default Sezione;
