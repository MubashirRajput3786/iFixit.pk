import React from "react";
import Home from "./pages/Home";
import "./globals.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Services from "./pages/Service";
import About_us from "./pages/About_us"
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Service" element={<Services />} />
          <Route path="/About_us" element={<About_us />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
