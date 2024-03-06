import Nadvar from "./Componets/Nadvar/Nadvar";
import Inicio from "./Componets/Inicio/Inicio";
import Contactos from "./Componets/Contactos/Contactos";
import Nosotros from "./Componets/Nosotros/Nosotros"; 
import Footer from "./Componets/Footer/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="general">
      <BrowserRouter>
        <Nadvar />
       
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contactos" element={<Contactos />} />
        </Routes>
       
      </BrowserRouter>
      
    </div>
  );
}

export default App;