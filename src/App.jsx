import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InteriorPage from "./Interiors/Interiors";
import Gallery from "./Interiors/Gallery";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InteriorPage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
