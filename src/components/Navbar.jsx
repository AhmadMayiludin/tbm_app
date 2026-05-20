import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/drive/logo_photo.jpg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [
    { to: '/', label: 'Beranda' },
    { to: '/literasi', label: 'Ruang Literasi' },
    { to: '/belajar', label: 'Ruang Belajar' },
    { to: '/kegiatan', label: 'Jadwal Kegiatan' },
    { to: '/panduan', label: 'Buku Panduan' },
    { to: '/relawan', label: 'Jadi Relawan', cta: true },
  ];

  return (
    <nav>
      <Link to="/" className="nav-logo">
        <img src={logo} alt="TBM Pustaka Berkiprah" />
        <div className="nav-logo-text">Ruang Nalar<br/><span>& Nyala TBM</span></div>
      </Link>
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
        {navItems.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className={`${location.pathname === item.to ? 'active' : ''} ${item.cta ? 'nav-cta' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
