import { useState, useEffect } from 'react';
import { Book, Brain, Leaf, Library, Globe, Landmark, ArrowRight, X } from 'lucide-react';
import literasiDasarImg from '../assets/drive/emot_1.jpg';
import literasiKognitifImg from '../assets/drive/emot_2.jpg';
import ekoliterasiImg from '../assets/drive/emot_3.jpg';
import remajaImg from '../assets/drive/emot_4.jpg';
import koleksiImg from '../assets/drive/emot_5.jpg';
import agamaImg from '../assets/drive/drive_extra_1.jpg';

const articles = {
  art1: { title: 'Membangun Budaya Baca di Rumah', content: 'Literasi dimulai dari rumah. Menciptakan pojok baca yang nyaman dan meluangkan waktu 15 menit setiap hari untuk membaca bersama anak dapat membangun kecintaan mereka pada buku seumur hidup.', icon: <Book />, color: 'icon-blue', image: literasiDasarImg },
  art2: { title: 'Pentingnya Literasi Digital', content: 'Di era informasi, kemampuan menyaring berita dan menggunakan perangkat digital secara bijak sangat krusial agar terhindar dari hoax dan penipuan siber.', icon: <Globe />, color: 'icon-purple', image: literasiKognitifImg },
  art3: { title: 'Belajar dari Alam', content: 'Kegiatan bagi anak dan remaja usia 7–15 tahun untuk belajar mengenal dan merawat lingkungan melalui praktik menanam serta pengamatan alam. Kegiatan ini menumbuhkan kepedulian dan tanggung jawab terhadap lingkungan sejak dini.', icon: <Leaf />, color: 'icon-green', image: ekoliterasiImg },
  art4: { title: 'Ruang Literasi untuk Anak dan Remaja', content: 'Anak-anak dan remaja usia 7–15 tahun berkumpul untuk membaca, menulis, dan berbagi cerita bersama. Melalui kegiatan yang interaktif, mereka belajar mengembangkan gagasan, mengekspresikan diri, dan menumbuhkan kecintaan terhadap literasi.', icon: <Brain />, color: 'icon-pink', image: remajaImg },
  art5: { title: 'Koleksi Buku di TBM Kami', content: 'Kami memiliki lebih dari 1.200 koleksi buku mulai dari cerita anak, pengetahuan umum, hingga keterampilan praktis yang bisa dipinjam secara gratis.', icon: <Library />, color: 'icon-amber', image: koleksiImg },
  art6: { title: 'Mengaji adalah Literasi Terdekat', content: "Kegiatan ini biasanya untuk lansia dalam mengembangkan kemampuan membaca melalui pembelajaran Al-Qur'an. Selain memperkuat pemahaman keagamaan, kegiatan ini menjadi bagian dari upaya meningkatkan literasi dasar di masyarakat.", icon: <Landmark />, color: 'icon-green', image: agamaImg }
};

function Literasi() {
  const [selectedArt, setSelectedArt] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="literasi">
      <div className="section-eyebrow reveal">Bab 4 · Ruang Literasi</div>
      <h2 className="section-title reveal">Wawasan &amp; Pengetahuan</h2>
      <p className="section-desc reveal">Kumpulan artikel singkat dan informasi edukatif untuk meningkatkan minat baca dan wawasan masyarakat Karawang.</p>

      <div className="articles-grid">
        {Object.entries(articles).map(([id, art], index) => (
          <div key={id} className="article-card reveal" style={{animationDelay: `${index * 0.1}s`}} onClick={() => setSelectedArt(art)}>
            <div className={`article-thumb ${art.color}`}>
              <img src={art.image} alt={`Gambar ${art.title}`} />
              <span>{art.icon}</span>
            </div>
            <div className="article-body">
              <h3 className="article-title" style={{marginBottom: '1rem'}}>{art.title}</h3>
              <p className="article-preview" style={{fontSize: '0.9rem', color: 'var(--muted)', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>{art.content}</p>
              <div style={{marginTop: '1.5rem', color: 'var(--earth)', fontWeight: 'bold', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem'}}>
                Baca Selengkapnya <ArrowRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedArt && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem'}}>
          <div className="card" style={{maxWidth: '600px', position: 'relative', animation: 'fadeInUp 0.4s ease'}}>
            <button onClick={() => setSelectedArt(null)} style={{position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer'}}><X /></button>
            <div className={`article-thumb ${selectedArt.color}`} style={{height: '190px', borderRadius: '8px', marginBottom: '1.5rem'}}>
              <img src={selectedArt.image} alt={`Gambar ${selectedArt.title}`} />
              <span>{selectedArt.icon}</span>
            </div>
            <h2 className="section-title" style={{fontSize: '1.8rem'}}>{selectedArt.title}</h2>
            <p style={{lineHeight: '1.8', fontSize: '1.1rem'}}>{selectedArt.content}</p>
            <button onClick={() => setSelectedArt(null)} className="btn-primary" style={{marginTop: '2rem'}}>Tutup</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Literasi;
