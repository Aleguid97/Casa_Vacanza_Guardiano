import Sezione from "../components/Sezione";
import Cronologia from "../components/Cronologia";
import CardLuogo from "../components/CardLuogo";
import BandaCta from "../components/BandaCta";
import { storia, inMarina, dintorni, dallaCasa, aPiedi } from "../data/territorio";

function Territorio() {
  return (
    <>
      <Sezione
        titolo="Marina di Ragusa e dintorni"
        sottotitolo="Un borgo di mare con una lunga storia e, tutto intorno, spiagge, riserve naturali e città barocche."
      />

      <Sezione titolo="Dalla casa" sottotitolo="Distanze approssimative, dalla casa fronte spiaggia." sfondo="bg-superficie">
        <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dallaCasa.map((voce) => (
            <li key={voce.nome} className="rounded-2xl bg-sabbia p-5 text-center">
              <p className="font-titolo text-2xl font-semibold text-corallo-testo">{voce.distanza}</p>
              <p className="mt-1 text-sm font-medium text-inchiostro/80">{voce.nome}</p>
            </li>
          ))}
        </ul>
      </Sezione>

      <Sezione titolo="A due passi da casa" sottotitolo="Per mangiare e muoversi senza prendere l'auto.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aPiedi.map((luogo) => (
            <CardLuogo key={luogo.nome} {...luogo} />
          ))}
        </div>
      </Sezione>

      <Sezione titolo="Una breve storia del borgo" sfondo="bg-superficie" ornamento>
        <Cronologia eventi={storia} />
      </Sezione>

      <Sezione titolo="A Marina di Ragusa" sottotitolo="Da vedere e da vivere senza allontanarsi dal borgo.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {inMarina.map((luogo) => (
            <CardLuogo key={luogo.nome} {...luogo} />
          ))}
        </div>
      </Sezione>

      <Sezione titolo="Nei dintorni" sottotitolo="Distanze indicative: per Punta Secca e il castello sono quelle dalla casa, per gli altri luoghi dal centro di Marina di Ragusa." sfondo="bg-superficie">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dintorni.map((luogo) => (
            <CardLuogo key={luogo.nome} {...luogo} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-inchiostro/70">
          Per orari e biglietti di musei e monumenti conviene controllare i siti ufficiali, perché cambiano
          nel corso dell'anno.
        </p>
      </Sezione>

      <BandaCta
        titolo="Ti abbiamo convinto?"
        testo="Scrivici le date del tuo soggiorno e ti confermiamo la disponibilità."
      />
    </>
  );
}

export default Territorio;
