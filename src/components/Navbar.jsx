import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav>
      <Link to="/" className="nav-logo">Ruang Nalar<br/><span>& Nyala TBM</span></Link>
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/">Tentang</Link></li>
        <li><Link to="/literasi">Literasi</Link></li>
        <li><Link to="/belajar">Belajar</Link></li>
        <li><Link to="/kegiatan">Kegiatan</Link></li>
        <li><Link to="/relawan" className="nav-cta">Jadi Relawan</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
