import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Sparkles, Zap, ShieldCheck, Building2, Phone, Gift } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import heroImg from '../assets/drive/kegiatan_1.jpg';
import logo from '../assets/drive/logo_photo.jpg';

function Home() {
  const whatsappMessage = 'Halo Tbm Pustaka Berkiprah👋🏻, saya ingin bertanya terkait kunjungan dan observasi';
  const whatsappUrl = `https://wa.me/6285216789586?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const identity = [
    { icon: <Building2 size={22} />, label: 'Nama Lembaga', value: 'TBM Pustaka Berkiprah Karawang' },
    { icon: <MapPin size={22} />, label: 'Alamat', value: 'Dusun Pakuncen RT.02/06, Desa Sukaharja, Telukjambe Timur, Karawang' },
    { icon: <FaInstagram size={22} />, label: 'Instagram', value: '@pustakaberkiprah' },
    { icon: <FaWhatsapp size={22} />, label: 'WhatsApp', value: '+62 852-1678-9586' },
  ];

  return (
    <>
      <section className="hero" id="beranda">
        <div className="hero-content">
          <div className="hero-logo-lockup reveal">
            <img src={logo} alt="Logo TBM Pustaka Berkiprah" />
            <span>TBM Pustaka Berkiprah · Karawang ba</span>
          </div>
          <h1 className="reveal delay-1">Ruang <em>Nalar</em> &amp;<br/><em>Nyala</em> TBM</h1>
          <p className="hero-desc reveal delay-2">
            Tempat belajar nonformal berbasis literasi untuk semua, dari anak-anak yang baru mengenal huruf hingga warga yang terus belajar sepanjang hayat.
          </p>
          <div className="hero-actions reveal delay-3">
            <Link to="/belajar" className="btn-primary">Mulai Belajar</Link>
            <Link to="/sumbangan-buku" className="btn-ghost">Sumbang Buku <Gift size={18} /></Link>
          </div>

          <div className="hero-stats reveal delay-3">
            <div className="stat-item">
              <div className="stat-num">2011</div>
              <div className="stat-label">Berdiri Sejak</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">1.2K+</div>
              <div className="stat-label">Koleksi Buku</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">50+</div>
              <div className="stat-label">Relawan</div>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal delay-2">
          <div className="hero-image-float">
            <img src={heroImg} alt="Dokumentasi kegiatan TBM Pustaka Berkiprah" />
          </div>
        </div>
      </section>

      <section id="features">
        <div className="section-eyebrow reveal">Bab 1 · Dasar Program</div>
        <h2 className="section-title reveal">Literasi yang Memberdayakan</h2>
        <p className="section-desc reveal">Setiap ruang di platform ini disusun sebagai bab: profil lembaga, ruang literasi, ruang belajar, kegiatan, sumbangan buku, dan relawan.</p>
        <div className="features-grid">
          <div className="feature-card reveal delay-1">
            <div className="feature-icon icon-amber"><Sparkles size={28}/></div>
            <h3>Kontekstual</h3>
            <p>Belajar membaca, memahami informasi, dan melihat tantangan lingkungan sekitar secara kritis.</p>
          </div>
          <div className="feature-card reveal delay-2">
            <div className="feature-icon icon-green"><Zap size={28}/></div>
            <h3>Terampil</h3>
            <p>Mengasah keterampilan praktis mulai dari kreativitas anak, merajut, hingga budidaya pangan.</p>
          </div>
          <div className="feature-card reveal delay-3">
            <div className="feature-icon icon-blue"><ShieldCheck size={28}/></div>
            <h3>Inklusif</h3>
            <p>Ruang aman bagi warga untuk belajar, bertanya, mencoba, dan berkembang bersama.</p>
          </div>
        </div>
      </section>

      <section id="profil" className="identity-section">
        <div className="profil-grid">
          <div className="profil-visual reveal">
            <div className="profil-card">
              <img src={logo} alt="Logo TBM Pustaka Berkiprah" className="profil-logo" />
              <p className="profil-quote">
                "Selama ada satu orang pun yang mau diberdayakan, kegiatan tetap dijalankan. Itulah ruh dari TBM Pustaka Berkiprah."
              </p>
              <div className="profil-cite">Bunda Neneng, Pengelola</div>
            </div>
          </div>
          <div className="profil-info reveal">
            <div className="section-eyebrow">Bab 2 · Identitas Lembaga</div>
            <h2 className="section-title">Mengenal Pustaka Berkiprah</h2>
            <div className="identitas-bab">
              {identity.map((item) => (
                <div className="info-item" key={item.label}>
                  <div className="info-icon">{item.icon}</div>
                  <div>
                    <div className="info-label">{item.label}</div>
                    <div className="info-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary identity-wa">
              <Phone size={18} /> Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="visi-misi">
        <div className="section-eyebrow reveal">Bab 3 · Arah Gerak</div>
        <h2 className="section-title reveal">Visi &amp; Misi Strategis</h2>
        <div className="vm-grid">
          <div className="vm-card vm-dark reveal delay-1">
            <h3>Visi</h3>
            <p>Menjadi pusat literasi masyarakat yang mandiri, berdaya, dan bermanfaat bagi komunitas.</p>
          </div>
          <div className="vm-card reveal delay-2">
            <h3>Misi</h3>
            <ul>
              <li>Memberdayakan potensi lingkungan sekitar.</li>
              <li>Meningkatkan mutu pendidikan masyarakat.</li>
              <li>Membentuk karakter produktif pada remaja.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
