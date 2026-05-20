import { useEffect, useState } from 'react';
import { BookOpen, Palette, Shirt, Sprout, Tent, Calculator, ChevronRight, X, Image as ImageIcon } from 'lucide-react';
import membacaAltImg from '../assets/drive/drive_extra_4.jpg';
import membacaStoryImg from '../assets/drive/drive_extra_7.jpg';
import mewarnaiImg from '../assets/drive/drive_extra_6.jpg';
import merajutImg from '../assets/drive/drive_extra_2.jpg';
import picnicImg from '../assets/drive/kegiatan_5.jpg';
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
        desc: 'Pendampingan literasi dasar dari mengenal huruf sampai memahami isi bacaan sederhana.',
        details: 'Program Belajar Membaca membantu anak membangun kebiasaan membaca secara bertahap. Peserta diajak mengenal bunyi huruf, menyusun suku kata, membaca kata sederhana, mendengarkan cerita, lalu menceritakan kembali isi bacaan dengan bahasa sendiri. Relawan tidak hanya mengejar kelancaran membaca, tetapi juga memastikan anak memahami makna bacaan, berani bertanya, dan merasa bahwa buku adalah teman belajar yang menyenangkan.',
        badge: 'Anak-anak',
        image: membacaAltImg,
        gallery: [membacaAltImg, membacaStoryImg],
        class: 'icon-green',
        graphic: 'Huruf, cerita, dan pojok baca',
        steps: [
          'Pembukaan dilakukan dengan mengenalkan buku, gambar, dan kata kunci agar anak tertarik sebelum mulai membaca.',
          'Relawan mendampingi anak membaca pelan-pelan, membetulkan pelafalan, dan memberi contoh cara memahami isi kalimat.',
          'Anak diajak mengulang cerita, menyebut tokoh atau pesan bacaan, lalu diberi apresiasi agar percaya diri.',
        ],
      },
      {
        id: 'a2',
        icon: <Palette />,
        title: 'Mewarnai & Menggambar',
        desc: 'Ruang kreatif untuk melatih fokus, koordinasi tangan, imajinasi, dan keberanian bercerita.',
        details: 'Kegiatan Mewarnai & Menggambar dibuat sebagai pintu masuk belajar yang ringan untuk anak-anak. Peserta diberi tema gambar, alat warna, dan contoh sederhana, lalu diberi kebebasan memilih warna serta menambahkan cerita pada gambar mereka. Kegiatan ini membantu motorik halus, fokus, kesabaran, pengenalan warna, serta kemampuan mengungkapkan pendapat di depan teman-teman.',
        badge: 'Kreatif',
        image: mewarnaiImg,
        gallery: [mewarnaiImg, membacaAltImg],
        class: 'icon-amber',
        graphic: 'Warna, bentuk, dan cerita',
        steps: [
          'Relawan membuka kegiatan dengan tema sederhana seperti keluarga, lingkungan, hewan, atau tokoh cerita.',
          'Anak mewarnai atau menggambar sambil didampingi agar dapat memegang alat warna, memilih kombinasi warna, dan menyelesaikan karya.',
          'Di akhir kegiatan, anak diberi kesempatan menunjukkan gambar dan menjelaskan apa yang mereka buat.',
        ],
      },
      {
        id: 'a3',
        icon: <Calculator />,
        title: 'Bimbingan Belajar',
        desc: 'Pendampingan tugas sekolah dan latihan dasar untuk anak yang membutuhkan teman belajar.',
        details: 'Bimbingan Belajar membantu peserta memahami materi sekolah dengan suasana yang lebih santai. Relawan mendampingi anak membaca instruksi soal, memahami konsep dasar, mengerjakan latihan, dan mengecek kembali jawabannya. Fokusnya bukan sekadar menyelesaikan tugas, tetapi melatih anak berani mencoba, tidak takut salah, dan terbiasa menyusun cara berpikir yang runtut.',
        badge: 'Pelajar',
        image: heroImg,
        gallery: [heroImg, membacaAltImg],
        class: 'icon-blue',
        graphic: 'Tugas, diskusi, dan latihan',
        steps: [
          'Peserta membawa tugas atau materi yang belum dipahami, lalu relawan membantu memetakan bagian yang sulit.',
          'Latihan dilakukan bertahap dengan contoh soal, tanya jawab, dan penjelasan ulang menggunakan bahasa sederhana.',
          'Anak diajak menyimpulkan cara menyelesaikan soal agar bisa mengulanginya sendiri di rumah.',
        ],
      },
    ],
    keterampilan: [
      {
        id: 'k1',
        icon: <Shirt />,
        title: 'Kelas Merajut',
        desc: 'Kelas keterampilan untuk membuat karya sederhana yang rapi, sabar, dan bernilai guna.',
        details: 'Kelas Merajut mengenalkan keterampilan tangan sebagai bagian dari literasi produktif. Peserta belajar mengenal alat dan bahan, mengikuti pola dasar, menjaga kerapian, serta menyelesaikan karya kecil secara bertahap. Program ini melatih ketekunan, konsentrasi, kerja sama, dan rasa bangga karena peserta bisa membawa pulang hasil karya sendiri.',
        badge: 'Remaja',
        image: merajutImg,
        gallery: [merajutImg, heroImg],
        class: 'icon-pink',
        graphic: 'Benang, pola, dan karya',
        steps: [
          'Peserta dikenalkan alat, bahan, contoh karya, dan cara menjaga keamanan saat menggunakan alat keterampilan.',
          'Relawan memperagakan teknik dasar, lalu peserta mencoba mengikuti pola sambil dibimbing satu per satu.',
          'Karya yang selesai dievaluasi bersama dari sisi kerapian, fungsi, dan kemungkinan dikembangkan menjadi produk sederhana.',
        ],
      },
      {
        id: 'k2',
        icon: <Sprout />,
        title: 'Hidroponik',
        desc: 'Belajar merawat tanaman dan memahami lingkungan melalui praktik sederhana.',
        details: 'Program Hidroponik memperkenalkan literasi lingkungan lewat kegiatan menanam yang dekat dengan kehidupan sehari-hari. Peserta mengenal bibit, air, nutrisi, cahaya, dan cara merawat tanaman sampai tumbuh. Dari kegiatan ini, anak dan warga belajar bahwa pangan sehat bisa dimulai dari rumah, sekaligus memahami pentingnya disiplin merawat lingkungan.',
        badge: 'Umum',
        image: merajutImg,
        gallery: [merajutImg, picnicImg],
        class: 'icon-green',
        graphic: 'Bibit, air, dan panen',
        steps: [
          'Peserta mengenal alat, bibit, media tanam, dan kebutuhan dasar tanaman hidroponik.',
          'Praktik dilakukan dengan menyiapkan wadah, menanam bibit, serta mencatat perkembangan tanaman.',
          'Peserta berdiskusi tentang manfaat pangan sehat dan cara menerapkan kebiasaan merawat tanaman di rumah.',
        ],
      },
    ],
    situasional: [
      {
        id: 's1',
        icon: <Tent />,
        title: 'Reading Picnic',
        desc: 'Kegiatan membaca santai di ruang terbuka agar buku terasa dekat dengan keluarga dan komunitas.',
        details: 'Reading Picnic membawa kegiatan membaca keluar dari ruang belajar biasa. Peserta memilih buku, duduk bersama di area terbuka, membaca dengan suasana santai, lalu berbagi cerita atau kutipan yang paling mereka sukai. Kegiatan ini membuat literasi terasa lebih akrab, menyenangkan, dan bisa dilakukan bersama keluarga, teman sebaya, maupun komunitas.',
        badge: 'Berkala',
        image: picnicImg,
        gallery: [picnicImg, membacaAltImg],
        class: 'icon-purple',
        graphic: 'Buku, tikar, dan ruang publik',
        steps: [
          'Peserta memilih buku atau bahan bacaan yang sesuai minatnya sebelum kegiatan dimulai.',
          'Sesi membaca dilakukan santai dengan pendampingan relawan agar anak tetap fokus dan nyaman.',
          'Kegiatan ditutup dengan berbagi cerita, menyebut bagian bacaan favorit, atau membuat refleksi singkat.',
        ],
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
                  {selectedProgram.steps.map((step, index) => (
                    <span key={step}>{index + 1}. {step}</span>
                  ))}
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
