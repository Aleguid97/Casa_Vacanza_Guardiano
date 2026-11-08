import CardAmbiente from "./CardAmbiente";
import CarosellaAmbienti from "./CarosellaAmbienti";

// Su telefono: schede una sotto l'altra. Da tablet in su: carosello.
function Ambienti({ ambienti }) {
  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 md:hidden">
        {ambienti.map((ambiente) => (
          <CardAmbiente key={ambiente.id} {...ambiente} />
        ))}
      </div>
      <div className="hidden md:block">
        <CarosellaAmbienti ambienti={ambienti} />
      </div>
    </>
  );
}

export default Ambienti;
