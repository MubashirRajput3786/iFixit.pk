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
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import RingLoader from "./components/LoadingSpinner";
import PopUp from "./components/PopUp";
import "./globals.css";
import Team from "./pages/Team";
import Form from "./pages/Form"; // ✅ Capital 'F'
import Privacy_Policy from "./pages/Privacy_Policy"

const AppContent = ({ open, setOpen }) => {
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
      {open && <PopUp setOpen={setOpen} />}

     
<Routes>
  <Route element={<Layout open={open} setOpen={setOpen} />}> 
    <Route path="/" element={<Home />} />
    <Route path="/Service" element={<Services />} />
    <Route path="/About_us" element={<About_us />} />
    <Route path="/Team" element={<Team />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/form" element={<Form />} /> {/* ✅ Corrected here */}
    <Route path="/Privacy_Policy" element={<Privacy_Policy />} />
  </Route>
</Routes>
    </>
  );
};

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <AppContent open={open} setOpen={setOpen} />
    </Router>
  );
};

export default App;
