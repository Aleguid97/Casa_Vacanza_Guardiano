function Cronologia({ eventi }) {
  return (
    <ol className="mx-auto max-w-3xl space-y-8 border-l-2 border-corallo/40 pl-8">
      {eventi.map((evento) => (
        <li key={evento.quando + evento.titolo} className="relative">
          <span className="absolute top-1.5 left-[calc(-2.5rem-1px)] h-4 w-4 rounded-full bg-corallo ring-4 ring-sabbia" />
          <p className="text-sm font-semibold uppercase tracking-wider text-corallo-testo">{evento.quando}</p>
          <h3 className="mt-1 text-xl font-semibold">{evento.titolo}</h3>
          <p className="mt-1 text-inchiostro/80">{evento.testo}</p>
        </li>
      ))}
    </ol>
  );
}

export default Cronologia;
