import { useEffect } from 'react';
import { BookOpen, CheckCircle2, Gift, MessageCircle, Truck } from 'lucide-react';
import donateImg from '../assets/drive/drive_extra_4.jpg';

const donationMessage = 'Halo Tbm Pustaka Berkiprah, saya ingin bertanya terkait sumbangan buku untuk TBM.';
const donationWhatsappUrl = `https://wa.me/6285216789586?text=${encodeURIComponent(donationMessage)}`;

function SumbanganBuku() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const donationSteps = [
    { icon: <BookOpen />, title: 'Pilih Buku Layak', desc: 'Buku anak, cerita, pengetahuan umum, pelajaran, agama, atau keterampilan yang masih bersih dan bisa dibaca.' },
    { icon: <MessageCircle />, title: 'Konfirmasi Lewat WhatsApp', desc: 'Kirim jumlah buku, jenis buku, dan rencana pengiriman agar pengelola bisa mencatat kebutuhan koleksi.' },
    { icon: <Truck />, title: 'Antar atau Kirim', desc: 'Buku dapat diantar ke lokasi TBM atau dikirim setelah jadwal dan alamat dikonfirmasi bersama pengelola.' },
  ];

  return (
    <section id="sumbangan-buku" className="donation-page">
      <div className="section-eyebrow reveal visible">Sumbangan Buku</div>
      <h2 className="section-title reveal visible">Bantu Koleksi Bacaan Terus Bertambah</h2>
      <p className="section-desc reveal visible">Satu buku yang masih layak bisa menjadi pintu belajar baru bagi anak-anak dan warga di sekitar TBM Pustaka Berkiprah.</p>

      <div className="donation-layout">
        <div className="donation-visual reveal visible">
          <img src={donateImg} alt="Kegiatan membaca anak di TBM Pustaka Berkiprah" />
          <div className="donation-badge"><Gift size={18} /> Donasi Buku Layak Baca</div>
        </div>

        <div className="donation-panel reveal visible delay-1">
          <h3>Cara Menyumbang Buku</h3>
          <div className="donation-steps">
            {donationSteps.map((step) => (
              <div className="donation-step" key={step.title}>
                <div className="donation-step-icon">{step.icon}</div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a href={donationWhatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary donation-cta">
            Tanya Sumbangan Buku <MessageCircle size={18} />
          </a>
        </div>
      </div>

      <div className="donation-notes reveal visible delay-2">
        <div><CheckCircle2 size={18} /> Buku dalam kondisi layak, tidak berjamur, dan halaman tidak hilang.</div>
        <div><CheckCircle2 size={18} /> Buku anak dan buku keterampilan sangat membantu program belajar.</div>
        <div><CheckCircle2 size={18} /> Donatur dapat menghubungi WhatsApp terlebih dahulu sebelum datang.</div>
      </div>
    </section>
  );
}

export default SumbanganBuku;
