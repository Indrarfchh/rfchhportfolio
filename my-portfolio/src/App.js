import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import EducationPage from './components/EducationPage/EducationPage';
import ExperiencePage from './components/ExperiencePage/ExperiencePage';
import ContactPage from './components/ContactPage/ContactPage';
import PersonalDetailsPage from './components/PersonalDetailsPage/PersonalDetailsPage';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">My Portfolio</Link>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            ☰
          </div>
          <ul className={isOpen ? "nav-links open" : "nav-links"}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/education" onClick={toggleMenu}>Education</Link></li>
            <li><Link to="/experience" onClick={toggleMenu}>Experience</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            <li><Link to="/personal-details" onClick={toggleMenu}>Personal Details</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/personal-details" element={<PersonalDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
