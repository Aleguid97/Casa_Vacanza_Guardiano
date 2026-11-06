import { Link } from "react-router-dom";

function Hero({ titolo, sottotitolo }) {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center absolute inset-0 bg-gray-500/40 rounded-tr-[100px]">
      <div className="relative max-w-2xl">
        <h1 className="text-4xl font-bold md:text-5xl">{titolo}</h1>
        {sottotitolo && <p className="mt-4 text-lg">{sottotitolo}</p>}
        <Link to="/contatti" className="rounded-md bg-white px-6 py-3 font-medium text-slate-900 hover:bg-slate-100">
          Richiedi disponibilità
        </Link>
      </div>
    </section>
  );
}

export default Hero;
