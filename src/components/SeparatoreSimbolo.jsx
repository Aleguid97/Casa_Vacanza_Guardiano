import SimboloBarca from "./SimboloBarca";

// Intermezzo decorativo: due linee sottili con la barca al centro.
function SeparatoreSimbolo({ className = "" }) {
  return (
    <div aria-hidden="true" className={`flex items-center justify-center gap-4 text-mare-testo ${className}`}>
      <span className="h-px w-14 bg-current opacity-40 sm:w-24" />
      <SimboloBarca className="h-11 w-auto" />
      <span className="h-px w-14 bg-current opacity-40 sm:w-24" />
    </div>
  );
}

export default SeparatoreSimbolo;
