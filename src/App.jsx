import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InteriorPage from "./Interiors/Interiors";
import Gallery from "./Interiors/Gallery";
import AboutPage from "./Interiors/About";
import Contact from "./Interiors/Contact"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InteriorPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
