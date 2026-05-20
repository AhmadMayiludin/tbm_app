import { useEffect, useState } from 'react';
import { BookOpen, Palette, Shirt, Sprout, Tent, Calculator, ChevronRight, X, Image as ImageIcon } from 'lucide-react';
import literasiImg from '../assets/drive/kegiatan_1.jpg';
import merajutImg from '../assets/drive/kegiatan_3.jpg';
import picnicImg from '../assets/drive/kegiatan_5.jpg';
import belajarGuideImg from '../assets/drive/belajar_2.jpg';
import heroImg from '../assets/drive/kegiatan_2.jpg';

function Belajar() {
  const [activeTab, setActiveTab] = useState('akademik');
  const [selectedProgram, setSelectedProgram] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  const programs = {
    akademik: [
      {
        id: 'a1',
        icon: <BookOpen />,
        title: 'Belajar Membaca',
        desc: 'Literasi dasar untuk anak prasekolah hingga SD.',
        details: 'Peserta belajar mengenal bunyi huruf, membaca kata sederhana, menyimak cerita, lalu menceritakan kembali dengan bahasa sendiri.',
        badge: 'Anak-anak',
        image: literasiImg,
        gallery: [literasiImg, belajarGuideImg],
        class: 'icon-green',
        graphic: 'Huruf, cerita, dan pojok baca',
      },
      {
        id: 'a2',
        icon: <Palette />,
        title: 'Mewarnai & Menggambar',
        desc: 'Mengembangkan kreativitas, fokus, dan motorik halus.',
        details: 'Anak-anak diberi tema mingguan, contoh visual, dan kesempatan menjelaskan gambar yang mereka buat supaya berani bercerita.',
        badge: 'Kreatif',
        image: literasiImg,
        gallery: [literasiImg, picnicImg],
        class: 'icon-amber',
        graphic: 'Warna, bentuk, dan cerita',
      },
      {
        id: 'a3',
        icon: <Calculator />,
        title: 'Bimbingan Belajar',
        desc: 'Pendampingan tugas sekolah dan latihan dasar.',
        details: 'Relawan membantu peserta memahami materi sekolah, membaca soal, dan menyelesaikan latihan secara bertahap.',
        badge: 'Pelajar',
        image: heroImg,
        gallery: [heroImg, literasiImg],
        class: 'icon-blue',
        graphic: 'Tugas, diskusi, dan latihan',
      },
    ],
    keterampilan: [
      {
        id: 'k1',
        icon: <Shirt />,
        title: 'Kelas Merajut',
        desc: 'Belajar merajut dari nol hingga menghasilkan produk.',
        details: 'Peserta dikenalkan alat, pola dasar, teknik simpul, lalu diarahkan membuat karya sederhana seperti pouch, syal, atau tas kecil.',
        badge: 'Remaja',
        image: merajutImg,
        gallery: [merajutImg, heroImg],
        class: 'icon-pink',
        graphic: 'Benang, pola, dan karya',
      },
      {
        id: 'k2',
        icon: <Sprout />,
        title: 'Hidroponik',
        desc: 'Menanam sayuran hidroponik bersama di pekarangan.',
        details: 'Program ini mengenalkan literasi lingkungan, siklus tumbuh tanaman, dan kebiasaan merawat pangan dari rumah.',
        badge: 'Umum',
        image: merajutImg,
        gallery: [merajutImg, picnicImg],
        class: 'icon-green',
        graphic: 'Bibit, air, dan panen',
      },
    ],
    situasional: [
      {
        id: 's1',
        icon: <Tent />,
        title: 'Reading Picnic',
        desc: 'Membaca bersama di taman terbuka secara berkala.',
        details: 'Peserta membawa atau memilih buku, membaca santai, lalu berbagi kutipan favorit dalam suasana piknik keluarga.',
        badge: 'Berkala',
        image: picnicImg,
        gallery: [picnicImg, literasiImg],
        class: 'icon-purple',
        graphic: 'Buku, tikar, dan ruang publik',
      },
    ],
  };

  return (
    <section id="belajar">
      <div className="section-eyebrow reveal">Bab 5 · Ruang Belajar</div>
      <h2 className="section-title reveal">Program Pembelajaran</h2>
      <p className="section-desc reveal">Klik setiap program untuk melihat keterangan lengkap, gambar pendukung, dan alur kegiatan.</p>

      <div className="belajar-tabs reveal">
        <button className={`tab-btn ${activeTab === 'akademik' ? 'active' : ''}`} onClick={() => setActiveTab('akademik')}>Literasi Dasar</button>
        <button className={`tab-btn ${activeTab === 'keterampilan' ? 'active' : ''}`} onClick={() => setActiveTab('keterampilan')}>Keterampilan</button>
        <button className={`tab-btn ${activeTab === 'situasional' ? 'active' : ''}`} onClick={() => setActiveTab('situasional')}>Situasional</button>
      </div>

      <div className="grid-3">
        {programs[activeTab].map((program, index) => (
          <button
            key={program.id}
            className="program-card reveal"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedProgram(program)}
          >
            <div className="program-image">
              <img src={program.image} alt={`Gambar program ${program.title}`} />
              <span className="program-badge">{program.badge}</span>
            </div>
            <div className="program-content">
              <div className={`program-emoji ${program.class}`}>{program.icon}</div>
              <h3>{program.title}</h3>
              <p>{program.desc}</p>
              <div className="program-graphic">
                <ImageIcon size={16} />
                <span>{program.graphic}</span>
              </div>
              <div className="program-more">Lihat keterangan <ChevronRight size={16} /></div>
            </div>
          </button>
        ))}
      </div>

      {selectedProgram && (
        <div className="program-modal" role="dialog" aria-modal="true">
          <div className="program-modal-panel">
            <button className="modal-close" onClick={() => setSelectedProgram(null)} aria-label="Tutup detail program"><X /></button>
            <div className="program-modal-grid">
              <div className="program-modal-gallery">
                {selectedProgram.gallery.map((image, index) => (
                  <img key={`${selectedProgram.id}-${index}`} src={image} alt={`Dokumentasi ${selectedProgram.title} ${index + 1}`} />
                ))}
              </div>
              <div>
                <div className={`program-emoji ${selectedProgram.class}`}>{selectedProgram.icon}</div>
                <div className="section-eyebrow">Detail Program</div>
                <h2 className="section-title">{selectedProgram.title}</h2>
                <p className="program-modal-desc">{selectedProgram.details}</p>
                <div className="detail-steps">
                  <span>1. Pembukaan dan pengenalan materi</span>
                  <span>2. Praktik bersama relawan</span>
                  <span>3. Refleksi hasil belajar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Belajar;
