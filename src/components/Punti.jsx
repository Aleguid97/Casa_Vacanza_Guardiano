function Punti({ punti }) {
  return (
    <ol className="grid gap-8 md:grid-cols-3">
      {punti.map((punto, indice) => (
        <li key={punto.titolo} className="rounded-2xl bg-superficie p-6 shadow-sm">
          <span className="font-titolo text-4xl font-semibold text-corallo-testo">
            {String(indice + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 text-xl font-semibold">{punto.titolo}</h3>
          <p className="mt-2 text-inchiostro/75">{punto.testo}</p>
        </li>
      ))}
    </ol>
  );
}

export default Punti;
