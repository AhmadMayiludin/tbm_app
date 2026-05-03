import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand-name">Ruang Nalar<br/><span>& Nyala TBM</span></div>
          <p className="footer-brand-desc">Platform digital TBM Pustaka Berkiprah Karawang — ruang edukasi, informasi, dan partisipasi masyarakat berbasis literasi.</p>
          <div className="footer-social">
            <a href="https://www.instagram.com/pustakaberkiprah?igsh=MXJuYWpqZDIzbjZscQ==" target="_blank" rel="noopener noreferrer" className="social-btn" title="Instagram"><FaInstagram size={18} /></a>
            <a href="https://wa.me/6285216789586" target="_blank" rel="noopener noreferrer" className="social-btn" title="WhatsApp"><FaWhatsapp size={18} /></a>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Navigasi</div>
          <ul className="footer-links">
            <li><Link to="/">Tentang TBM</Link></li>
            <li><Link to="/literasi">Ruang Literasi</Link></li>
            <li><Link to="/belajar">Ruang Belajar</Link></li>
            <li><Link to="/kegiatan">Jadwal Kegiatan</Link></li>
            <li><Link to="/relawan">Daftar Relawan</Link></li>
            <li><Link to="/relawan#kerjasama">Kerjasama</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Kontak & Lokasi</div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon"><MapPin size={16} /></span>
            <span className="footer-contact-text">Dusun Pakuncen RT.02/06, Desa Sukaharja, Kec. Telukjambe Timur, Karawang</span>
          </div>
          <div className="footer-contact-item" style={{marginBottom: '1rem'}}>
            <span className="footer-contact-icon"><FaInstagram size={16} /></span>
            <span className="footer-contact-text">
              <a href="https://www.instagram.com/pustakaberkiprah?igsh=MXJuYWpqZDIzbjZscQ==" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>@pustakaberkiprah</a>
            </span>
          </div>
        </div>
      </div>

      <div className="footer-map-wrapper" style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Peta Lokasi TBM</span>
          <a href="https://maps.app.goo.gl/NQ5Qcp97gENyzFD2A?g_st=aw" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: 'var(--amber)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            Buka di Google Maps ↗
          </a>
        </div>
        <iframe 
          src="https://maps.google.com/maps?q=Taman%20Bacaan%20Masyarakat%20Pustaka%20Berkiprah%20Karawang&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="280" 
          style={{ border: 0, borderRadius: '16px' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="footer-bottom">
        <span>© 2011 Ruang Nalar & Nyala TBM · Pustaka Berkiprah Karawang</span>
        <span>Dibuat dengan <Heart size={14} fill="currentColor" style={{display: 'inline', verticalAlign: 'middle', margin: '0 2px'}} /> oleh Kelompok 1 · PENMAS UNSIKA</span>
      </div>
    </footer>
  );
}

export default Footer;
