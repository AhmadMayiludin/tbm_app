import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

function Home() {
  return (
    <>
      <section className="hero" id="beranda">
        <div className="hero-decoration">&amp;</div>
        <p className="hero-tag">TBM Pustaka Berkiprah · Karawang</p>
        <h1>Ruang <em>Nalar</em><br/>&amp; <em>Nyala</em> TBM</h1>
        <p className="hero-desc">
          Tempat belajar nonformal berbasis literasi untuk semua — dari anak-anak yang baru kenal huruf, remaja yang menemukan keterampilan, hingga lansia yang terus belajar sepanjang hayat.
        </p>
        <div className="hero-actions">
          <Link to="/belajar" className="btn-primary">Jelajahi Program</Link>
          <Link to="/relawan" className="btn-ghost">Bergabung sebagai Relawan →</Link>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-num">2011</div>
            <div className="stat-label">Berdiri Sejak</div>
          </div>
          <div>
            <div className="stat-num">3+</div>
            <div className="stat-label">Kelompok Sasaran</div>
          </div>
          <div>
            <div className="stat-num">10+</div>
            <div className="stat-label">Program Aktif</div>
          </div>
          <div>
            <div className="stat-num">100%</div>
            <div className="stat-label">Berbasis Sukarela</div>
          </div>
        </div>
        <div className="hero-image-float">
          <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="20" width="30" height="40" rx="3" fill="white"/>
            <rect x="45" y="10" width="30" height="50" rx="3" fill="white"/>
            <rect x="20" y="65" width="50" height="35" rx="3" fill="white"/>
            <circle cx="70" cy="80" r="15" fill="white" opacity="0.5"/>
          </svg>
        </div>
      </section>

      <section id="profil">
        <div className="profil-grid">
          <div className="profil-visual">
            <div className="profil-card">
              <p className="profil-quote">
                "Selama ada satu orang pun yang mau diberdayakan, kegiatan tetap dijalankan. Itulah ruh dari TBM Pustaka Berkiprah."
              </p>
              <span className="profil-cite">— Bunda Neneng, Pengelola TBM</span>
              <div className="profil-tags">
                <span className="profil-tag">📚 Literasi untuk Semua</span>
                <span className="profil-tag">🌱 Berbasis Komunitas</span>
                <span className="profil-tag">❤️ Sukarela &amp; Ikhlas</span>
              </div>
            </div>
          </div>
          <div className="profil-info">
            <div className="section-eyebrow">Identitas Lembaga</div>
            <h2 className="section-title">TBM Pustaka Berkiprah</h2>
            <p className="section-desc" style={{marginBottom: '2rem'}}>Lembaga pendidikan nonformal yang lahir dari kepedulian terhadap literasi dan pemberdayaan masyarakat di Karawang.</p>
            <div className="info-item">
              <div className="info-icon"><MapPin size={20} strokeWidth={2.5} color="var(--earth-dark)" /></div>
              <div>
                <div className="info-label">Lokasi</div>
                <div className="info-value">Dusun Pakuncen RT.02/06, Desa Sukaharja,<br/>Kec. Telukjambe Timur, Kab. Karawang</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><Calendar size={20} strokeWidth={2.5} color="var(--earth-dark)" /></div>
              <div>
                <div className="info-label">Berdiri Sejak</div>
                <div className="info-value">2011</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><Users size={20} strokeWidth={2.5} color="var(--earth-dark)" /></div>
              <div>
                <div className="info-label">Pengelola</div>
                <div className="info-value">Bunda Neneng &amp; Tim Relawan Sukarela</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><FaInstagram size={20} color="var(--earth-dark)" /></div>
              <div>
                <div className="info-label">Media Sosial</div>
                <div className="info-value">
                  <a href="https://www.instagram.com/pustakaberkiprah?igsh=MXJuYWpqZDIzbjZscQ==" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>@pustakaberkiprah (Instagram) ↗</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{marginTop: '4rem'}}>
          <div className="section-eyebrow">Arah &amp; Tujuan</div>
          <h2 className="section-title">Visi &amp; Misi</h2>
          <div className="vm-grid">
            <div className="vm-card visi">
              <div className="vm-label">Visi</div>
              <p className="vm-text">Menjadi Taman Baca Masyarakat yang <strong>berdaya</strong> dan <strong>bermanfaat</strong> — bagi setiap individu, keluarga, dan komunitas di sekitarnya.</p>
            </div>
            <div className="vm-card">
              <div className="vm-label">Misi</div>
              <ul className="misi-list">
                <li>Memberdayakan potensi lingkungan melalui program literasi yang kontekstual dan inklusif</li>
                <li>Turut serta meningkatkan mutu pendidikan bagi seluruh lapisan masyarakat</li>
                <li>Mengelola dan memberdayakan anak serta remaja dalam berbagai kegiatan produktif</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
