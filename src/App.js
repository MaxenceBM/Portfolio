import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import Header from "./components/header";
import Portfolio from "./screens/portfolio";
import Contact from "./screens/contact";
import PrezFermeBLUM from "./screens/prezFermeBLUM";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Header />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Contact" element={<Contact />} />

      <Route path="/PrezFermeBLUM" element={<PrezFermeBLUM />} />
    </Routes>
  );
}

export default App;
