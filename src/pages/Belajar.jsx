import React, { useState } from 'react';
import { BookOpen, Scissors, Target, Book, Palette, Moon, HeartPulse, Shirt, PenTool, Sprout, Utensils, ShieldAlert, Laptop, Pen, Tent } from 'lucide-react';

function Belajar() {
  const [activeTab, setActiveTab] = useState('akademik');

  return (
    <section id="belajar">
      <div style={{height: '64px'}}></div>
      <div className="section-eyebrow">Ruang Belajar</div>
      <h2 className="section-title">Program Pembelajaran</h2>
      <p className="section-desc">Setiap program dirancang sesuai kebutuhan nyata masyarakat — fleksibel, kontekstual, dan memberdayakan.</p>

      <div className="belajar-tabs">
        <button className={`tab-btn ${activeTab === 'akademik' ? 'active' : ''}`} onClick={() => setActiveTab('akademik')} style={{display: 'flex', alignItems: 'center', gap: '0.4rem'}}><BookOpen size={16} /> Literasi Dasar</button>
        <button className={`tab-btn ${activeTab === 'keterampilan' ? 'active' : ''}`} onClick={() => setActiveTab('keterampilan')} style={{display: 'flex', alignItems: 'center', gap: '0.4rem'}}><Scissors size={16} /> Pemberdayaan Keterampilan</button>
        <button className={`tab-btn ${activeTab === 'situasional' ? 'active' : ''}`} onClick={() => setActiveTab('situasional')} style={{display: 'flex', alignItems: 'center', gap: '0.4rem'}}><Target size={16} /> Kelas Situasional</button>
      </div>

      <div className={`tab-content ${activeTab === 'akademik' ? 'active' : ''}`}>
        <div className="program-grid">
          <div className="program-card">
            <div className="program-emoji"><Book size={32} color="var(--sage)" strokeWidth={1.5} /></div>
            <div className="program-title">Belajar Membaca &amp; Menulis</div>
            <p className="program-desc">Kegiatan literasi dasar untuk anak-anak usia prasekolah hingga SD, dengan pendekatan menyenangkan melalui gambar dan cerita.</p>
            <span className="program-badge">Anak-anak</span>
          </div>
          <div className="program-card">
            <div className="program-emoji"><Palette size={32} color="var(--amber)" strokeWidth={1.5} /></div>
            <div className="program-title">Mewarnai &amp; Menggambar</div>
            <p className="program-desc">Mengembangkan kreativitas dan motorik halus anak-anak melalui kegiatan seni yang terstruktur dan menyenangkan setiap Sabtu.</p>
            <span className="program-badge">Anak-anak</span>
          </div>
          <div className="program-card">
            <div className="program-emoji"><BookOpen size={32} color="var(--earth)" strokeWidth={1.5} /></div>
            <div className="program-title">Read Aloud bersama Adik</div>
            <p className="program-desc">Kakak-kakak remaja membacakan cerita untuk adik-adik kecil — melatih kepercayaan diri sekaligus memupuk budaya literasi sejak dini.</p>
            <span className="program-badge">Remaja &amp; Anak</span>
          </div>
          <div className="program-card">
            <div className="program-emoji"><Moon size={32} color="#5C7A62" strokeWidth={1.5} /></div>
            <div className="program-title">Kajian Keagamaan &amp; Iqra</div>
            <p className="program-desc">Program belajar membaca Al-Quran dan pengajian rutin bagi para lansia, dilaksanakan setiap hari Senin dengan suasana akrab dan penuh semangat.</p>
            <span className="program-badge">Lansia</span>
          </div>
          <div className="program-card">
            <div className="program-emoji"><HeartPulse size={32} color="#D4882B" strokeWidth={1.5} /></div>
            <div className="program-title">Edukasi Gizi &amp; Kesehatan</div>
            <p className="program-desc">Informasi dan diskusi tentang pola makan sehat, gizi seimbang, dan perawatan kesehatan dasar yang penting bagi lansia dan keluarga.</p>
            <span className="program-badge">Lansia</span>
          </div>
        </div>
      </div>

      <div className={`tab-content ${activeTab === 'keterampilan' ? 'active' : ''}`}>
        <div className="program-grid">
          <div className="program-card">
            <div className="program-emoji"><Shirt size={32} color="var(--earth)" strokeWidth={1.5} /></div>
            <div className="program-title">Kelas Merajut</div>
            <p className="program-desc">Remaja belajar merajut dari nol hingga menghasilkan produk kreatif yang bisa dipakai atau dijual — keterampilan tangan yang bernilai ekonomi.</p>
            <span className="program-badge amber-badge">Remaja</span>
          </div>
          <div className="program-card">
            <div className="program-emoji"><PenTool size={32} color="var(--sage)" strokeWidth={1.5} /></div>
            <div className="program-title">Kerajinan Kain Perca</div>
            <p className="program-desc">Mengubah sisa kain menjadi karya berguna — tas kecil, sarung bantal, dan produk kreatif lainnya. Melatih kreativitas sekaligus kepedulian lingkungan.</p>
            <span className="program-badge amber-badge">Umum</span>
          </div>
          <div className="program-card">
            <div className="program-emoji"><Sprout size={32} color="#5C7A62" strokeWidth={1.5} /></div>
            <div className="program-title">Hidroponik &amp; Ketahanan Pangan</div>
            <p className="program-desc">Menanam sayuran secara hidroponik bersama-sama, lalu memanennya dan memasak bersama. Belajar mandiri pangan dari pekarangan sendiri.</p>
            <span className="program-badge amber-badge">Ibu &amp; Remaja</span>
          </div>
          <div className="program-card">
            <div className="program-emoji"><Scissors size={32} color="var(--amber)" strokeWidth={1.5} /></div>
            <div className="program-title">Tempat Pensil Kain Flanel</div>
            <p className="program-desc">Pelatihan membuat tempat pensil dari kain flanel yang bisa menjadi produk kreatif bernilai jual, melatih keterampilan dan kewirausahaan dasar.</p>
            <span className="program-badge amber-badge">Anak &amp; Remaja</span>
          </div>
          <div className="program-card">
            <div className="program-emoji"><Utensils size={32} color="#D4882B" strokeWidth={1.5} /></div>
            <div className="program-title">Membuat &amp; Berbagi Takjil</div>
            <p className="program-desc">Proyek kolaboratif di bulan Ramadan — bersama-sama membuat takjil lalu membagikannya kepada masyarakat sekitar sebagai wujud kepedulian sosial.</p>
            <span className="program-badge amber-badge">Semua Usia</span>
          </div>
        </div>
      </div>

      <div className={`tab-content ${activeTab === 'situasional' ? 'active' : ''}`}>
        <div className="program-grid">
          <div className="program-card">
            <div className="program-emoji"><ShieldAlert size={32} color="#D84B4B" strokeWidth={1.5} /></div>
            <div className="program-title">Penyuluhan Bahaya Narkoba</div>
            <p className="program-desc">Dilaksanakan bekerja sama dengan BNN sebagai respons nyata atas permasalahan di lingkungan sekitar. Program ini menjadi bukti TBM hadir merespons kebutuhan.</p>
            <span className="program-badge">Responsif</span>
          </div>
          <div className="program-card">
            <div className="program-emoji"><Laptop size={32} color="var(--earth)" strokeWidth={1.5} /></div>
            <div className="program-title">Pendampingan Belajar Daring</div>
            <p className="program-desc">Program yang lahir saat pandemi COVID-19 untuk membantu anak-anak yang tidak memiliki perangkat belajar daring, agar tak tertinggal dari pendidikan.</p>
            <span className="program-badge">Kontekstual</span>
          </div>
          <div className="program-card">
            <div className="program-emoji"><Pen size={32} color="var(--amber)" strokeWidth={1.5} /></div>
            <div className="program-title">Tutor Sebaya Literasi</div>
            <p className="program-desc">Program tutor sebaya bagi siswa SMP yang mengalami ketertinggalan membaca-menulis akibat pandemi. Dihentikan saat peserta sudah berhasil mandiri.</p>
            <span className="program-badge">Berbasis Kebutuhan</span>
          </div>
          <div className="program-card">
            <div className="program-emoji"><Tent size={32} color="var(--sage)" strokeWidth={1.5} /></div>
            <div className="program-title">Reading Picnic</div>
            <p className="program-desc">Setiap tiga bulan, anak-anak diajak ke taman kota untuk membaca bersama di alam terbuka — menjadikan literasi sebagai pengalaman yang menyenangkan.</p>
            <span className="program-badge">Berkala</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Belajar;
