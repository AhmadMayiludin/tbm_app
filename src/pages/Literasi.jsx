import React, { useState } from 'react';

const articles = {
  art1: {
    tag: 'Literasi Dasar',
    title: 'Mengapa Membaca Itu Bukan Sekadar Hobi?',
    body: `<p>Sering kali kita mendengar, "saya tidak suka membaca" — seolah membaca adalah pilihan gaya hidup, seperti memilih olahraga favorit. Padahal, membaca adalah keterampilan dasar yang menentukan seberapa jauh seseorang bisa memahami dunianya sendiri.</p>
    <p>UNESCO mendefinisikan literasi bukan hanya sebagai kemampuan membaca dan menulis, tetapi juga sebagai kemampuan berpikir kritis dan memanfaatkan informasi secara efektif. Artinya, literasi adalah jantung dari hampir semua kemampuan lain yang kita butuhkan dalam kehidupan modern.</p>
    <p>Di TBM Pustaka Berkiprah, kami percaya bahwa membaca adalah pintu masuk menuju kehidupan yang lebih baik. Bukan karena semua orang harus menjadi kutu buku, melainkan karena kemampuan memahami tulisan membuka akses terhadap pengetahuan, hak, dan peluang yang ada di dunia ini.</p>
    <p>Ketika seorang anak bisa membaca, ia tidak lagi hanya mengandalkan apa yang didengarnya. Ia bisa memverifikasi, membandingkan, dan membentuk pendapatnya sendiri. Itulah awal dari kemandirian berpikir yang sejati.</p>`
  },
  art2: {
    tag: 'Literasi & Kognitif',
    title: 'Literasi Membentuk Cara Kita Berpikir',
    body: `<p>Tahukah kamu bahwa membaca secara aktif dapat mengubah struktur otak kita? Riset neurosains menunjukkan bahwa saat kita membaca, berbagai area otak aktif secara bersamaan — area bahasa, visualisasi, memori, dan bahkan emosi.</p>
    <p>Anak-anak yang sering membaca sejak dini cenderung memiliki kemampuan berkonsentrasi lebih baik, kosa kata yang lebih kaya, dan kemampuan memahami perspektif orang lain (empati) yang lebih tinggi. Ini bukan kebetulan — ini adalah hasil dari latihan kognitif yang terjadi setiap kali mereka membaca.</p>
    <p>Di TBM kami, kami melihat langsung bagaimana anak yang awalnya kesulitan membaca, setelah rutin bergabung dalam kegiatan belajar bersama, tidak hanya bisa membaca dengan lebih lancar — tetapi juga lebih mudah mengikuti pelajaran di sekolah dan lebih percaya diri dalam berinteraksi.</p>
    <p>Literasi bukan hanya kemampuan teknis. Ia adalah investasi jangka panjang pada kualitas berpikir seseorang.</p>`
  },
  art3: {
    tag: 'Literasi Kehidupan',
    title: 'Literasi Bukan Hanya di Bangku Sekolah',
    body: `<p>Bayangkan seorang ibu muda yang belum lancar membaca. Setiap kali belanja ke warung, ia tidak bisa memastikan apakah produk yang dibelinya sudah kadaluarsa atau belum. Ia tidak bisa membaca leaflet posyandu tentang gizi anak. Ia bergantung pada orang lain untuk hal-hal mendasar yang seharusnya bisa ia putuskan sendiri.</p>
    <p>Inilah yang disebut dengan dampak nyata dari rendahnya literasi. Bukan soal tidak bisa lulus ujian, tetapi soal ketidakmampuan berpartisipasi penuh dalam kehidupan sehari-hari.</p>
    <p>Literasi fungsional — kemampuan membaca dan menulis yang cukup untuk kebutuhan hidup sehari-hari — adalah hak dasar setiap manusia. TBM Pustaka Berkiprah hadir untuk membantu menjembatani kesenjangan itu, dengan cara yang tidak menghakimi, tidak merendahkan, dan selalu disesuaikan dengan kebutuhan nyata masyarakat.</p>
    <p>Karena literasi yang bermakna adalah literasi yang membuat kehidupan seseorang menjadi lebih mudah dan lebih bermartabat.</p>`
  },
  art4: {
    tag: 'Peran TBM',
    title: 'TBM: Lebih dari Sekadar Rak Buku',
    body: `<p>Ketika orang mendengar "taman bacaan", bayangan pertama yang muncul mungkin adalah sebuah ruangan kecil dengan rak buku berdebu dan beberapa anak yang membaca dalam keheningan. Nyatanya, TBM modern jauh lebih dari itu.</p>
    <p>TBM Pustaka Berkiprah, misalnya, menjalankan kegiatan merajut, hidroponik, penyuluhan narkoba bersama BNN, dan pendampingan belajar daring saat pandemi. Semua ini jauh dari gambaran "hanya menyediakan buku".</p>
    <p>TBM adalah ruang aman — tempat di mana seseorang bisa bertanya tanpa takut dianggap bodoh, belajar tanpa takut dihakimi, dan berkreasi tanpa batas. Ia adalah ekosistem pembelajaran yang adaptif dan responsif terhadap kebutuhan komunitas yang dilayaninya.</p>
    <p>Inilah mengapa TBM tidak bisa digantikan begitu saja oleh perpustakaan digital atau platform online. Ada dimensi manusiawi dan komunitas yang hanya bisa hadir ketika orang-orang berkumpul secara fisik, berbagi pengalaman, dan belajar bersama.</p>`
  },
  art5: {
    tag: 'Literasi Digital',
    title: 'Cerdas di Era Digital Dimulai dari Literasi',
    body: `<p>Setiap hari, kita dibombardir oleh ribuan informasi — berita, status media sosial, pesan berantai di WhatsApp, iklan, konten viral. Tanpa kemampuan literasi yang baik, seseorang tidak memiliki alat untuk menyaring mana yang benar, mana yang menyesatkan, dan mana yang berbahaya.</p>
    <p>Hoaks menyebar cepat justru karena banyak orang belum terlatih untuk membaca secara kritis. Mereka membaca judul, langsung percaya, langsung meneruskan. Inilah mengapa literasi digital — kemampuan mengakses, mengevaluasi, dan memanfaatkan informasi digital secara bijak — menjadi keterampilan wajib di abad ke-21.</p>
    <p>Di TBM Pustaka Berkiprah, kami mulai dari yang paling dasar: membiasakan anak-anak membaca sampai selesai sebelum berkomentar, mengajarkan remaja untuk mencari sumber kedua sebelum mempercayai informasi, dan mendiskusikan bersama tentang apa yang kita baca hari ini.</p>
    <p>Literasi digital bukan soal pintar menggunakan gadget. Ia soal pintar menggunakan akal.</p>`
  },
  art6: {
    tag: 'Literasi Agama',
    title: 'Mengaji adalah Literasi yang Paling Dekat',
    body: `<p>Di antara semua program TBM Pustaka Berkiprah, program Iqra untuk lansia adalah salah satu yang paling mengharukan. Bayangkan seorang nenek berusia 65 tahun yang seumur hidupnya belum bisa membaca Al-Quran dengan lancar, kini dengan penuh semangat datang setiap Senin pagi untuk belajar bersama.</p>
    <p>Perpustakaan Nasional RI mengakui kegiatan keagamaan seperti pengajian dan iqra sebagai bagian dari literasi — tepatnya literasi agama. Dan ini masuk akal: proses belajar membaca huruf Arab, memahami maknanya, dan menghubungkannya dengan kehidupan sehari-hari adalah proses literasi yang sesungguhnya.</p>
    <p>Yang paling berharga bukan hanya kemampuan membacanya, tetapi perjalanannya. Seorang lansia yang berani mulai belajar di usia tua menunjukkan bahwa belajar tidak mengenal batas usia. Ia adalah teladan hidup tentang semangat yang tidak pernah padam.</p>
    <p>Di TBM kami, setiap orang yang hadir — berapapun usianya, apapun latar belakangnya — disambut dengan hangat. Karena selama ada keinginan untuk belajar, selalu ada tempat untuknya di sini.</p>`
  }
};

function Literasi() {
  const [activeModal, setActiveModal] = useState(null);

  const openArticle = (id) => {
    setActiveModal(articles[id]);
  };

  const closeModal = (e) => {
    if (e.target.className.includes('modal-overlay')) {
      setActiveModal(null);
    }
  };

  return (
    <>
      <section id="literasi">
        <div style={{height: '64px'}}></div>
        <div className="section-eyebrow">Ruang Edukasi</div>
        <h2 className="section-title">Pendidikan Literasi</h2>
        <p className="section-desc">Literasi bukan hanya tentang membaca dan menulis. Ia adalah kemampuan berpikir kritis, memahami dunia, dan mengubah diri menjadi lebih baik.</p>
        
        <div className="articles-grid">
          <div className="article-card" onClick={() => openArticle('art1')}>
            <div className="article-thumb green">📖</div>
            <div className="article-body">
              <div className="article-cat">Literasi Dasar</div>
              <div className="article-title">Mengapa Membaca Itu Bukan Sekadar Hobi?</div>
              <p className="article-preview">Membaca adalah jendela dunia — pepatah yang sudah sering kita dengar, namun maknanya jauh lebih dalam dari sekadar ungkapan motivasi semata.</p>
              <a className="article-readmore">Baca selengkapnya →</a>
            </div>
          </div>
          <div className="article-card" onClick={() => openArticle('art2')}>
            <div className="article-thumb amber">🧠</div>
            <div className="article-body">
              <div className="article-cat">Literasi &amp; Kognitif</div>
              <div className="article-title">Literasi Membentuk Cara Kita Berpikir</div>
              <p className="article-preview">Ketika anak belajar membaca, bukan hanya huruf yang ia kenal — melainkan cara otaknya berkembang untuk memproses informasi secara lebih kompleks.</p>
              <a className="article-readmore">Baca selengkapnya →</a>
            </div>
          </div>
          <div className="article-card" onClick={() => openArticle('art3')}>
            <div className="article-thumb earth">🌿</div>
            <div className="article-body">
              <div className="article-cat">Literasi Kehidupan</div>
              <div className="article-title">Literasi Bukan Hanya di Bangku Sekolah</div>
              <p className="article-preview">Seorang ibu yang bisa membaca label kemasan makanan, seorang lansia yang memahami dosis obatnya — itulah literasi yang sesungguhnya hidup di masyarakat.</p>
              <a className="article-readmore">Baca selengkapnya →</a>
            </div>
          </div>
          <div className="article-card" onClick={() => openArticle('art4')}>
            <div className="article-thumb green">📚</div>
            <div className="article-body">
              <div className="article-cat">Peran TBM</div>
              <div className="article-title">TBM: Lebih dari Sekadar Rak Buku</div>
              <p className="article-preview">Taman Bacaan Masyarakat hadir bukan hanya menyediakan buku, tetapi juga menjadi ruang aman untuk belajar, bertanya, dan bertumbuh bagi semua usia.</p>
              <a className="article-readmore">Baca selengkapnya →</a>
            </div>
          </div>
          <div className="article-card" onClick={() => openArticle('art5')}>
            <div className="article-thumb amber">🔗</div>
            <div className="article-body">
              <div className="article-cat">Literasi Digital</div>
              <div className="article-title">Cerdas di Era Digital Dimulai dari Literasi</div>
              <p className="article-preview">Di tengah banjir informasi digital, kemampuan memilah fakta dari hoaks adalah keterampilan hidup yang tak kalah penting dari kemampuan berhitung.</p>
              <a className="article-readmore">Baca selengkapnya →</a>
            </div>
          </div>
          <div className="article-card" onClick={() => openArticle('art6')}>
            <div className="article-thumb earth">🕌</div>
            <div className="article-body">
              <div className="article-cat">Literasi Agama</div>
              <div className="article-title">Mengaji adalah Literasi yang Paling Dekat</div>
              <p className="article-preview">Bagi para lansia di TBM Pustaka Berkiprah, belajar membaca Al-Quran adalah perjalanan literasi yang penuh makna dan keberanian di usia senja.</p>
              <a className="article-readmore">Baca selengkapnya →</a>
            </div>
          </div>
        </div>
      </section>

      <div className={`modal-overlay ${activeModal ? 'open' : ''}`} onClick={closeModal}>
        {activeModal && (
          <div className="modal">
            <button className="modal-close" onClick={() => setActiveModal(null)}>✕</button>
            <div className="modal-tag">{activeModal.tag}</div>
            <h3 className="modal-title">{activeModal.title}</h3>
            <div className="modal-body" dangerouslySetInnerHTML={{ __html: activeModal.body }}></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Literasi;
