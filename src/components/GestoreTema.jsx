import { useEffect } from "react";
import { useSelector } from "react-redux";

// Applica palette e tema (chiaro o scuro) alla pagina. Con il modo "auto" segue il
// tema del dispositivo e si aggiorna se l'utente lo cambia mentre il sito è aperto.
function GestoreTema() {
  const palette = useSelector((state) => state.ui.palette);
  const modo = useSelector((state) => state.ui.modo);

  useEffect(() => {
    const radice = document.documentElement;
    const sistema = window.matchMedia("(prefers-color-scheme: dark)");

    const applica = () => {
      const scuro = modo === "scuro" || (modo === "auto" && sistema.matches);
      radice.setAttribute("data-palette", palette);
      radice.setAttribute("data-theme", scuro ? "dark" : "light");
    };

    applica();
    if (modo !== "auto") return undefined;
    sistema.addEventListener("change", applica);
    return () => sistema.removeEventListener("change", applica);
  }, [palette, modo]);

  return null;
}

export default GestoreTema;
