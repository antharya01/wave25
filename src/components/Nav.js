import React, { useState, useEffect } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav">RADIO NITROZ</div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/events">EVENTS</Link></li> {/* Example route */}
        <li><Link to="/Footer">TEAM-RN</Link></li>
        <li><Link to="/Footer">SPONSORS </Link></li> {/* Example route */}
        <li><Link to="/Footer">CONTACT</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;