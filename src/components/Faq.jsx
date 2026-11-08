function Faq({ domande }) {
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {domande.map((voce) => (
        <details key={voce.domanda} className="group rounded-2xl bg-superficie p-5 shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-titoli [&::-webkit-details-marker]:hidden">
            {voce.domanda}
            <span aria-hidden="true" className="text-2xl leading-none text-corallo-testo transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-inchiostro/80">{voce.risposta}</p>
        </details>
      ))}
    </div>
  );
}

export default Faq;
