import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Library, GraduationCap, CalendarDays, Users, MousePointerClick, Image as ImageIcon } from 'lucide-react';
import logo from '../assets/drive/logo_photo.jpg';

function Panduan() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const guideItems = [
    {
      icon: <Home />,
      title: 'Beranda',
      desc: 'Saat membuka dasbor, pengguna melihat logo, nama TBM, tombol Mulai Belajar, tombol Buku Panduan, statistik lembaga, dan visual kegiatan literasi.',
      link: '/',
      tone: 'teal',
    },
    {
      icon: <Library />,
      title: 'Ruang Literasi',
      desc: 'Bagian ini berisi kartu artikel singkat. Setiap kartu dapat diklik untuk membuka bacaan lengkap tentang budaya baca, literasi digital, ekoliterasi, dan koleksi buku.',
      link: '/literasi',
      tone: 'sun',
    },
    {
      icon: <GraduationCap />,
      title: 'Ruang Belajar',
      desc: 'Halaman ini menampilkan program pembelajaran. Ketika program diklik, pengguna mendapat keterangan, foto, dan tahapan kegiatan.',
      link: '/belajar',
      tone: 'blue',
    },
    {
      icon: <CalendarDays />,
      title: 'Jadwal Kegiatan',
      desc: 'Pengguna dapat melihat agenda mingguan, jam kegiatan, lokasi, highlight acara, dan dokumentasi kegiatan TBM.',
      link: '/kegiatan',
      tone: 'coral',
    },
    {
      icon: <Users />,
      title: 'Jadi Relawan',
      desc: 'Halaman relawan menyediakan tombol ke Google Form dan tombol WhatsApp untuk bertanya tentang kunjungan atau observasi.',
      link: '/relawan',
      tone: 'leaf',
    },
    {
      icon: <MousePointerClick />,
      title: 'Navigasi',
      desc: 'Navigasi atas dan bawah memiliki urutan menu yang sama supaya pengunjung mudah berpindah halaman.',
      link: '/',
      tone: 'purple',
    },
  ];

  return (
    <section id="panduan" className="guide-page">
      <div className="guide-motion" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="guide-hero reveal">
        <img src={logo} alt="Logo TBM Pustaka Berkiprah" />
        <div>
          <div className="section-eyebrow">Buku Panduan Digital</div>
          <h2 className="section-title">Panduan Membuka Dasbor</h2>
          <p className="section-desc">Panduan ini menjelaskan isi menu, visual yang muncul, dan fungsi tiap bagian agar pengunjung mudah memakai website TBM Pustaka Berkiprah.</p>
        </div>
      </div>

      <div className="guide-intro reveal delay-1">
        <div className="guide-intro-icon"><MousePointerClick /></div>
        <div>
          <h3>Cara Menggunakan</h3>
          <p>Pilih menu di navigasi atas atau bawah. Pada halaman Belajar, klik kartu program untuk membuka keterangan lengkap dan gambar pendukung.</p>
        </div>
      </div>

      <div className="guide-grid">
        {guideItems.map((item, index) => (
          <article className="guide-card reveal" style={{ animationDelay: `${index * 0.1}s` }} key={item.title}>
            <div className={`guide-placeholder guide-${item.tone}`}>
              <div className="guide-placeholder-icon">{item.icon}</div>
              <div className="guide-placeholder-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="guide-picture-label"><ImageIcon size={15} /> Visual {index + 1}</span>
            </div>
            <div className="guide-card-body">
              <div className="guide-card-title">
                <span>{item.icon}</span>
                <h3>{item.title}</h3>
              </div>
              <p>{item.desc}</p>
              <Link to={item.link} className="guide-link">Buka halaman</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Panduan;
