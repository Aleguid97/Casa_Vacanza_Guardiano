import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import GestoreTema from "./components/GestoreTema";
import SelettoreTema from "./components/SelettoreTema";
import { MOSTRA_SELETTORE_TEMA } from "./data/sito";
import Home from "./pages/Home";
import LaCasa from "./pages/LaCasa";
import GalleriaPagina from "./pages/Galleria";
import Territorio from "./pages/Territorio";
import ComePrenotare from "./pages/ComePrenotare";
import Contatti from "./pages/Contatti";
import NonTrovata from "./pages/NonTrovata";

function ScrollInCima() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <GestoreTema />
      <ScrollInCima />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/la-casa" element={<LaCasa />} />
          <Route path="/galleria" element={<GalleriaPagina />} />
          <Route path="/territorio" element={<Territorio />} />
          <Route path="/come-prenotare" element={<ComePrenotare />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="*" element={<NonTrovata />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      {MOSTRA_SELETTORE_TEMA && <SelettoreTema />}
    </>
  );
}

export default App;
