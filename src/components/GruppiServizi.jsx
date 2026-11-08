function GruppiServizi({ gruppi }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {gruppi.map((gruppo) => (
        <section key={gruppo.titolo} className="rounded-2xl bg-superficie p-6 shadow-sm">
          <h3 className="text-lg font-semibold">{gruppo.titolo}</h3>
          <ul className="mt-3 space-y-2 text-sm text-inchiostro/80">
            {gruppo.voci.map((voce) => (
              <li key={voce} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-corallo" />
                <span>{voce}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default GruppiServizi;
