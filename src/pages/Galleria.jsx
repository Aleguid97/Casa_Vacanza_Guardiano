import Sezione from "../components/Sezione";
import Galleria from "../components/Galleria";
import BandaCta from "../components/BandaCta";
import { foto } from "../data/galleria";

function GalleriaPagina() {
  return (
    <>
      <Sezione titolo="Galleria" sottotitolo="Clicca su una foto per ingrandirla.">
        <Galleria foto={foto} />
      </Sezione>

      <BandaCta
        titolo="Ti piace quello che vedi?"
        testo="Controlla le date disponibili scrivendoci: ti rispondiamo il prima possibile."
      />
    </>
  );
}

export default GalleriaPagina;
