import Header from "./Header"; // Assurez-vous que le chemin vers le fichier Header.jsx est correct
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Description from "../pages/Description";
import Error404 from "../pages/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Home />} />

        {/* Route pour la page "À propos" */}
        <Route path="/about" element={<About />} />

        {/* Route pour les descriptions individuelles avec un paramètre dynamique */}
        <Route path="/Descriptions/:id" element={<Description />} />

        {/* Route générique pour les erreurs 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;