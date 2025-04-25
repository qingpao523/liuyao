import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <i className="fas fa-yin-yang"></i>
          <span>六爻算命</span>
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>首页</Link></li>
            <li><Link to="/divination" onClick={() => setMenuOpen(false)}>起卦</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>关于易经</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
