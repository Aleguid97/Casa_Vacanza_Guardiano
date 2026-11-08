import MotivoCorallo from "./MotivoCorallo";

// Intermezzo decorativo: due linee sottili con il corallo al centro.
function SeparatoreCorallo({ className = "" }) {
  return (
    <div aria-hidden="true" className={`flex items-center justify-center gap-4 text-logo-motivo ${className}`}>
      <span className="h-px w-14 bg-current opacity-40 sm:w-24" />
      <MotivoCorallo className="h-11 w-11" />
      <span className="h-px w-14 bg-current opacity-40 sm:w-24" />
    </div>
  );
}

export default SeparatoreCorallo;
