import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Footprints, Sprout } from 'lucide-react';

function Kegiatan() {
  return (
    <section id="kegiatan">
      <div style={{height: '64px'}}></div>
      <div className="section-eyebrow">Ruang Kegiatan</div>
      <h2 className="section-title">Jadwal &amp; Program TBM</h2>
      <p className="section-desc">Semua kegiatan dirancang konsisten dan terjadwal, agar masyarakat dapat berpartisipasi dengan mudah dan terencana.</p>
      
      <div className="kegiatan-layout">
        <div>
          <div className="jadwal-list">
            <div className="jadwal-item">
              <div className="jadwal-day">
                <div className="jadwal-day-name">Setiap</div>
                <div className="jadwal-day-short">Sabtu</div>
              </div>
              <div className="jadwal-info">
                <div className="jadwal-title">Kegiatan Belajar Anak-anak</div>
                <p className="jadwal-desc">Membaca, mewarnai, menggambar, kerajinan tangan, dan kelas merajut untuk remaja. Disesuaikan dengan usia dan minat peserta.</p>
                <span className="jadwal-freq">Mingguan · Rutin</span>
              </div>
            </div>
            <div className="jadwal-item">
              <div className="jadwal-day" style={{background: 'var(--sage)'}}>
                <div className="jadwal-day-name">Setiap</div>
                <div className="jadwal-day-short">Senin</div>
              </div>
              <div className="jadwal-info">
                <div className="jadwal-title">Kajian &amp; Iqra Lansia</div>
                <p className="jadwal-desc">Pengajian rutin dan belajar membaca Al-Quran bagi para lansia. Kegiatan keagamaan yang menjadi bagian dari literasi agama.</p>
                <span className="jadwal-freq">Mingguan · Rutin</span>
              </div>
            </div>
            <div className="jadwal-item">
              <div className="jadwal-day" style={{background: 'var(--amber)'}}>
                <div className="jadwal-day-name">Setiap</div>
                <div className="jadwal-day-short">Jumat</div>
              </div>
              <div className="jadwal-info">
                <div className="jadwal-title">Jumat Berkah</div>
                <p className="jadwal-desc">Remaja bersama-sama membuat makanan sederhana dan membagikannya kepada masyarakat sekitar sebagai bentuk kepedulian sosial.</p>
                <span className="jadwal-freq">Bulanan · Tetap</span>
              </div>
            </div>
            <div className="jadwal-item">
              <div className="jadwal-day" style={{background: '#5C7A62'}}>
                <div className="jadwal-day-name">Per</div>
                <div className="jadwal-day-short">3 Bln</div>
              </div>
              <div className="jadwal-info">
                <div className="jadwal-title">Reading Picnic</div>
                <p className="jadwal-desc">Anak-anak diajak ke taman kota untuk membaca dan read aloud di alam terbuka. Literasi yang menyenangkan dan tak terlupakan.</p>
                <span className="jadwal-freq">Triwulanan · Berkala</span>
              </div>
            </div>
            <div className="jadwal-item">
              <div className="jadwal-day" style={{background: '#7B5E8A'}}>
                <div className="jadwal-day-name">2×</div>
                <div className="jadwal-day-short">Setahun</div>
              </div>
              <div className="jadwal-info">
                <div className="jadwal-title">Pemeriksaan Kesehatan Lansia</div>
                <p className="jadwal-desc">Pemeriksaan kesehatan gratis bagi lansia bekerja sama dengan instansi terkait. Wujud nyata pemberdayaan kesehatan masyarakat.</p>
                <span className="jadwal-freq">Semesteran · Berkala</span>
              </div>
            </div>
          </div>
        </div>

        <div className="kegiatan-highlight">
          <div className="highlight-title">Program Spesial</div>
          <p className="highlight-sub">Kegiatan istimewa yang hadir secara berkala</p>
          <div className="highlight-event">
            <div className="highlight-event-name" style={{display: 'flex', alignItems: 'center', gap: '0.4rem'}}><Moon size={18} color="var(--amber)" /> Proyek Takjil Ramadan</div>
            <p className="highlight-event-desc">Setiap bulan Ramadan, peserta bersama-sama membuat takjil dan membagikannya ke masyarakat. Tradisi berbagi yang mempererat komunitas.</p>
          </div>
          <div className="highlight-event">
            <div className="highlight-event-name" style={{display: 'flex', alignItems: 'center', gap: '0.4rem'}}><Footprints size={18} color="var(--sage)" /> Jalan-jalan &amp; Healing Lansia</div>
            <p className="highlight-event-desc">Kegiatan rekreasi berkala untuk para lansia — menyegarkan pikiran dan menjaga semangat belajar mereka tetap hidup.</p>
          </div>
          <div className="highlight-event">
            <div className="highlight-event-name" style={{display: 'flex', alignItems: 'center', gap: '0.4rem'}}><Sprout size={18} color="#5C7A62" /> Panen Hidroponik Bersama</div>
            <p className="highlight-event-desc">Setelah menanam sayuran bersama, waktunya memanen dan memasak hasil kebun sendiri — pengalaman ketahanan pangan yang berkesan.</p>
          </div>
          <div style={{marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)'}}>
            <p style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.8rem', letterSpacing: '0.04em'}}>JADWAL BISA BERUBAH SESUAI KEBUTUHAN</p>
            <Link to="/relawan" style={{display: 'inline-block', background: 'var(--amber)', color: 'var(--charcoal)', padding: '0.7rem 1.4rem', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none'}}>Ikut Berpartisipasi →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kegiatan;
