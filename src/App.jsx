import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Service";
import About_us from "./pages/About_us";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Layout from "./components/Layout"; // 👈 path sahi hai
import "./globals.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home route without layout */}
        <Route path="/" element={<Home />} />

        {/* All other routes inside Layout */}
        <Route element={<Layout />}>
          <Route path="/Service" element={<Services />} />
          <Route path="/About_us" element={<About_us />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
