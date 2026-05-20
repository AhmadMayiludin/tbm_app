import { useEffect } from 'react';
import { ExternalLink, Heart, MessageCircle, Sparkles, Users } from 'lucide-react';

const googleFormUrl = 'https://forms.gle/FCmG1rv1wPKz8twk8';
const whatsappMessage = 'Halo Tbm Pustaka Berkiprah👋🏻, saya ingin bertanya terkait kunjungan dan observasi';
const whatsappUrl = `https://wa.me/6285216789586?text=${encodeURIComponent(whatsappMessage)}`;

function Relawan() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: <Heart />, title: 'Berbagi Kebahagiaan', desc: 'Merasakan langsung dampak positif bagi masyarakat sekitar.' },
    { icon: <Users />, title: 'Bertemu Komunitas', desc: 'Berkolaborasi dengan relawan dan warga yang peduli pada literasi.' },
    { icon: <Sparkles />, title: 'Pengembangan Diri', desc: 'Mengasah kemampuan komunikasi, mengajar, dan organisasi.' },
  ];

  return (
    <section id="relawan" className="relawan-page">
      <div className="relawan-motion" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="section-eyebrow reveal">Bab 7 · Mari Bergabung</div>
      <h2 className="section-title reveal">Jadilah Bagian dari Perubahan</h2>
      <p className="section-desc reveal">Kami selalu terbuka bagi siapa saja yang ingin menyisihkan waktu dan tenaganya untuk kemajuan literasi di Karawang.</p>

      <div className="relawan-layout">
        <div className="relawan-info">
          <div className="benefit-list">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="benefit-item reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="icon-amber benefit-icon">{benefit.icon}</div>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relawan-action-card reveal">
          <div className="relawan-action-visual">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="section-eyebrow">Pendaftaran & Kontak</div>
          <h3>Daftar lewat Google Form</h3>
          <p>Website tidak menyimpan data pendaftar. Semua pendaftaran diarahkan ke Google Form agar lebih rapi dan mudah dikelola.</p>
          <div className="relawan-actions">
            <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Isi Google Form <ExternalLink size={18} />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Chat WhatsApp <MessageCircle size={18} />
            </a>
          </div>
          <div className="wa-preview">
            <span>Pesan otomatis WhatsApp:</span>
            <p>{whatsappMessage}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Relawan;
