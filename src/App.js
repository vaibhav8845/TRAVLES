import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/Pages/About/About';
import Gallery from './components/Pages/Gallery/Gallery';
import Services from './components/Pages/Services/Services';
import Contact from './components/Pages/Contact/Contact';
import TaxiForm from './components/TaxiForm/TaxiForm';
import Footer from './components/Footer/Footer';
import { useTheme } from './ThemeContext';
import "./App.css";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-now" element={<TaxiForm />} />
        <Route path="/taxi-booking" element={<TaxiForm />} />
        <Route path="/home" element={<Home />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
