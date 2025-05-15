import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Service";
import About_us from "./pages/About_us";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import RingLoader from "./components/LoadingSpinner";
import "./globals.css";

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const handle = requestAnimationFrame(() => {
      setLoading(false);
    });

    return () => cancelAnimationFrame(handle);
  }, [location]);

  return (
    <>
      {loading && <RingLoader />}

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
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
