import React from "react";
import Header from "./Header"; // Assurez-vous que le chemin vers le fichier Header.jsx est correct
import{ BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Description from "./pages/Description";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Descriptions/:id" element={<Description />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;