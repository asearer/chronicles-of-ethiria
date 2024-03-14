import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import News from './News';
import Information from './Information';
import Images from './Images';
import Links from './Links';
import About from './About';
import Contact from './Contact';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/information">Information</Link></li>
        <li><Link to="/images">Images</Link></li>
        <li><Link to="/links">Links</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/information" element={<Information />} />
        <Route path="/images" element={<Images />} />
        <Route path="/links" element={<Links />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </nav>
  );
}

export default Navbar;
