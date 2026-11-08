function CardAmbiente({ nome, descrizione, letto, immagine, dotazioni = [] }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-superficie shadow-sm transition-shadow hover:shadow-lg">
      <img src={immagine} alt={nome} className="aspect-4/3 w-full object-cover" loading="lazy" />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold">{nome}</h3>
        {letto && <p className="mt-1 text-sm font-semibold text-mare-testo">{letto}</p>}
        <p className="mt-2 text-sm text-inchiostro/75">{descrizione}</p>
        {dotazioni.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {dotazioni.map((voce) => (
              <li key={voce} className="rounded-full bg-sabbia px-3 py-1 text-xs text-inchiostro/80">
                {voce}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default CardAmbiente;
