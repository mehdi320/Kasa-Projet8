import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import LogementDetails from "./pages/LogementDetails"; // Assurez-vous que le chemin vers le fichier LogementDetails.jsx est correct

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements/:id" element={<LogementDetails />} /> {/* Ajoutez une nouvelle route pour les détails du logement */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;