import { useEffect } from 'react';
import { Clock, MapPin, Star } from 'lucide-react';
import kegiatanSatu from '../assets/drive/kegiatan_1.jpg';
import kegiatanDua from '../assets/drive/kegiatan_2.jpg';
import kegiatanLima from '../assets/drive/kegiatan_5.jpg';

function Kegiatan() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const jadwal = [
    { day: 'Sabtu', date: '08', time: '09:00 - 11:00', title: 'Kelas Literasi & Mewarnai', desc: 'Kegiatan rutin mingguan untuk anak-anak prasekolah dan SD.' },
    { day: 'Minggu', date: '09', time: '14:00 - 16:00', title: 'Kelas Merajut Bersama', desc: 'Belajar membuat berbagai kerajinan dari benang untuk remaja.' },
    { day: 'Senin', date: '10', time: '16:00 - 17:30', title: 'Bimbingan Belajar Gratis', desc: 'Bantuan belajar untuk mata pelajaran sekolah bagi yang membutuhkan.' },
  ];

  const dokumentasi = [
    { image: kegiatanSatu, title: 'Kegiatan bersama anak-anak dan komunitas' },
    { image: kegiatanDua, title: 'Dokumentasi acara literasi TBM' },
    { image: kegiatanLima, title: 'Perayaan dan panggung komunitas' },
  ];

  return (
    <section id="kegiatan">
      <div className="section-eyebrow reveal">Bab 6 · Jadwal Kegiatan</div>
      <h2 className="section-title reveal">Agenda Terdekat Kami</h2>
      <p className="section-desc reveal">Pantau jadwal kegiatan rutin dan acara spesial TBM Pustaka Berkiprah.</p>

      <div className="kegiatan-layout">
        <div className="jadwal-list">
          {jadwal.map((j, index) => (
            <div key={j.title} className="jadwal-item reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="jadwal-day">
                <div className="jadwal-day-name">{j.day}</div>
                <div className="jadwal-day-short">{j.date}</div>
              </div>
              <div className="jadwal-info">
                <h3 className="jadwal-title">{j.title}</h3>
                <p className="jadwal-desc">{j.desc}</p>
                <div className="jadwal-meta">
                  <span><Clock size={14}/> {j.time}</span>
                  <span><MapPin size={14}/> TBM Pustaka Berkiprah</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="kegiatan-highlight reveal">
          <img src={kegiatanLima} alt="Dokumentasi Reading Picnic dan kegiatan TBM" />
          <div className="highlight-title">
            <Star color="var(--sun)" fill="var(--sun)" size={24} />
            <h3>Highlight Acara</h3>
          </div>
          <div className="highlight-card">
            <h4>Reading Picnic #5</h4>
            <p>Acara kumpul komunitas bulan depan di Taman Kota Karawang. Membaca santai sambil piknik keluarga.</p>
            <div>Mei 2026 · Segera Datang</div>
          </div>
        </aside>
      </div>

      <div className="kegiatan-gallery reveal">
        {dokumentasi.map((item) => (
          <figure key={item.title}>
            <img src={item.image} alt={item.title} />
            <figcaption>{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Kegiatan;
