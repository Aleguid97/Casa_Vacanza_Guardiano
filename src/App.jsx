import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Camere from "./pages/Camere";
import Contatti from "./pages/Contatti";
import NonTrovata from "./pages/NonTrovata";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camere" element={<Camere />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="*" element={<NonTrovata />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
