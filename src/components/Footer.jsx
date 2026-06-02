import { Link } from 'react-router-dom';
import { MapPin, Heart } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/drive/logo_photo.jpg';

function Footer() {
  const whatsappMessage = 'Halo Tbm Pustaka Berkiprah👋🏻, saya ingin bertanya terkait kunjungan dan observasi';
  const whatsappUrl = `https://wa.me/6285216789586?text=${encodeURIComponent(whatsappMessage)}`;
  const navItems = [
    { to: '/', label: 'Beranda' },
    { to: '/literasi', label: 'Ruang Literasi' },
    { to: '/belajar', label: 'Ruang Belajar' },
    { to: '/kegiatan', label: 'Jadwal Kegiatan' },
    { to: '/sumbangan-buku', label: 'Sumbangan Buku' },
    { to: '/relawan', label: 'Jadi Relawan' },
  ];

  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <img src={logo} alt="Logo TBM Pustaka Berkiprah" />
            <div className="footer-brand-name">Ruang Nalar<br/><span>& Nyala TBM</span></div>
          </div>
          <p className="footer-brand-desc">Platform digital TBM Pustaka Berkiprah Karawang, ruang edukasi, informasi, dan partisipasi masyarakat berbasis literasi.</p>
          <div className="footer-social">
            <a href="https://www.instagram.com/pustakaberkiprah?igsh=MXJuYWpqZDIzbjZscQ==" target="_blank" rel="noopener noreferrer" className="social-btn" title="Instagram"><FaInstagram size={18} /></a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="social-btn" title="WhatsApp"><FaWhatsapp size={18} /></a>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Navigasi</div>
          <ul className="footer-links">
            {navItems.map((item) => <li key={item.to}><Link to={item.to}>{item.label}</Link></li>)}
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Kontak & Lokasi</div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon"><MapPin size={16} /></span>
            <span className="footer-contact-text">Dusun Pakuncen RT.02/06, Desa Sukaharja, Kec. Telukjambe Timur, Karawang</span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon"><FaInstagram size={16} /></span>
            <span className="footer-contact-text">
              <a href="https://www.instagram.com/pustakaberkiprah?igsh=MXJuYWpqZDIzbjZscQ==" target="_blank" rel="noopener noreferrer">@pustakaberkiprah</a>
            </span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon"><FaWhatsapp size={16} /></span>
            <span className="footer-contact-text">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">+62 852-1678-9586</a>
            </span>
          </div>
        </div>
      </div>

      <div className="footer-map-wrapper">
        <div className="footer-map-head">
          <span>Peta Lokasi TBM</span>
          <a href="https://maps.app.goo.gl/NQ5Qcp97gENyzFD2A?g_st=aw" target="_blank" rel="noopener noreferrer">Buka di Google Maps</a>
        </div>
        <iframe
          title="Peta Lokasi TBM Pustaka Berkiprah"
          src="https://maps.google.com/maps?q=Taman%20Bacaan%20Masyarakat%20Pustaka%20Berkiprah%20Karawang&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="280"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="footer-bottom">
        <span>© 2011 Ruang Nalar & Nyala TBM · Pustaka Berkiprah Karawang</span>
        <span>Dibuat dengan <Heart size={14} fill="currentColor" /> oleh Kelompok 1 · PENMAS UNSIKA</span>
      </div>
    </footer>
  );
}

export default Footer;
