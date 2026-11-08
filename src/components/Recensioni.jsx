const formato = (numero) => numero.toLocaleString("it-IT", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

function Recensioni({ dati }) {
  return (
    <div>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 sm:flex-row sm:items-start">
        <div className="shrink-0 rounded-2xl bg-mare px-8 py-5 text-center text-white shadow-sm">
          <p className="font-titolo text-5xl font-semibold">{dati.punteggio}</p>
          <p className="mt-1 text-sm font-semibold">{dati.giudizio}</p>
          <p className="text-xs text-white/85">{dati.numero} recensioni</p>
        </div>

        <ul className="grid w-full gap-x-8 gap-y-3 sm:grid-cols-2">
          {dati.categorie.map((categoria) => (
            <li key={categoria.nome}>
              <div className="flex items-baseline justify-between text-sm">
                <span className="text-inchiostro/80">{categoria.nome}</span>
                <span className="font-semibold text-titoli">{formato(categoria.valore)}</span>
              </div>
              <div className="mt-1 h-2 rounded-full bg-sabbia-scuro">
                <div className="h-2 rounded-full bg-corallo" style={{ width: `${categoria.valore * 10}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {dati.citazioni.map((citazione) => (
          <figure
            key={citazione.nome}
            className="flex w-full flex-col rounded-2xl bg-superficie p-6 shadow-sm md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <blockquote className="whitespace-pre-line text-inchiostro/85">{citazione.testo}</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-titoli">
              {citazione.nome}
              <span className="font-normal text-inchiostro/70"> · {citazione.paese}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-inchiostro/70">
        Valutazioni e recensioni di ospiti che hanno soggiornato qui, raccolte da {dati.fonte} e aggiornate
        al {dati.aggiornato}.
      </p>
    </div>
  );
}

export default Recensioni;
