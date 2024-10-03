import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';

import Contact from './pages/contact.jsx';
import Resturant from './pages/resturant.jsx';
import { Menu } from '@mui/material';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* No need for "exact" in v6 */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resturant" element={<Resturant />} />
      </Routes>
    </>
   
      
  
  );
}

export default App;
