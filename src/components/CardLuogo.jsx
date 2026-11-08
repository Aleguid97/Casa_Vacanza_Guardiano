function CardLuogo({ nome, descrizione, distanza }) {
  return (
    <article className="flex flex-col rounded-2xl bg-superficie p-5 shadow-sm">
      {distanza && (
        <span className="mb-3 self-start rounded-full bg-sabbia px-3 py-1 text-xs font-semibold text-mare-testo">
          {distanza}
        </span>
      )}
      <h3 className="text-lg font-semibold">{nome}</h3>
      <p className="mt-2 text-sm text-inchiostro/75">{descrizione}</p>
    </article>
  );
}

export default CardLuogo;
