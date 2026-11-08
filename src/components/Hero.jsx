import { Link } from "react-router-dom";

function Hero({ etichetta, titolo, sottotitolo, immagine, testoPulsante = "Richiedi disponibilità", link = "/contatti", children }) {
  return (
    <section className="relative isolate flex min-h-[78vh] items-center overflow-hidden rounded-tr-[100px] bg-mare-scuro text-white">
      <img src={immagine} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-mare-scuro/85 via-mare-scuro/55 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-4 py-24">
        <div className="max-w-2xl">
          {etichetta && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">{etichetta}</p>
          )}
          <h1 className="text-4xl font-semibold text-white md:text-6xl">{titolo}</h1>
          {sottotitolo && <p className="mt-5 text-lg text-white/90 md:text-xl">{sottotitolo}</p>}
          {children && <div className="mt-6">{children}</div>}
          <Link
            to={link}
            className="mt-8 inline-block rounded-full bg-corallo px-8 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-corallo-scuro"
          >
            {testoPulsante}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
