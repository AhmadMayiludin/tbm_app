import React, { useState } from 'react';
import { Package, Search } from 'lucide-react';

function Relawan() {
  const [toastMsg, setToastMsg] = useState('');

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3500);
  };

  const submitForm = () => {
    const nama = document.getElementById('f-nama').value.trim();
    const wa = document.getElementById('f-wa').value.trim();
    const minat = document.getElementById('f-minat').value;
    if (!nama || !wa || !minat) {
      showToast('⚠️ Mohon lengkapi nama, WhatsApp, dan bidang minat.');
      return;
    }
    showToast('✅ Pendaftaran berhasil dikirim! Kami akan menghubungi ' + nama + ' segera.');
    document.getElementById('f-nama').value = '';
    document.getElementById('f-wa').value = '';
    document.getElementById('f-email').value = '';
    document.getElementById('f-minat').value = '';
    document.getElementById('f-motivasi').value = '';
  };

  return (
    <>
      <section id="relawan">
        <div style={{height: '64px'}}></div>
        <div className="relawan-layout">
          <div className="relawan-why">
            <div className="section-eyebrow">Ruang Partisipasi</div>
            <h2 className="section-title">Jadilah Bagian dari Gerakan Literasi</h2>
            <p className="section-desc" style={{marginBottom: '3rem'}}>TBM Pustaka Berkiprah tumbuh karena orang-orang yang peduli. Bergabunglah sebagai relawan dan bersama kita nyalakan semangat belajar di komunitas.</p>
            
            <div className="why-item">
              <span className="why-num">01</span>
              <div>
                <div className="why-content-title">Dampak Nyata, Langsung Terasa</div>
                <p className="why-content-desc">Setiap sesi yang kamu dampingi, setiap buku yang kamu bacakan, memberikan dampak langsung pada perkembangan anak dan masyarakat di sekitar TBM.</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-num">02</span>
              <div>
                <div className="why-content-title">Belajar Sambil Berbagi</div>
                <p className="why-content-desc">Menjadi relawan adalah kesempatan belajar tentang pendidikan masyarakat, kepemimpinan, dan empati sosial yang tak bisa kamu dapatkan dari bangku kuliah saja.</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-num">03</span>
              <div>
                <div className="why-content-title">Komunitas yang Hangat &amp; Inklusif</div>
                <p className="why-content-desc">Bergabung dengan tim relawan yang beragam latar belakangnya, bersatu dalam satu tujuan: memajukan literasi dan memberdayakan masyarakat Karawang.</p>
              </div>
            </div>
          </div>

          <div className="relawan-form-wrap">
            <div className="form-title">Daftar Relawan TBM</div>
            <p className="form-sub">Pendaftaran relawan kini dilakukan melalui Google Form. Silakan klik tombol di bawah ini untuk mengisi formulir pendaftaran.</p>
            
            <a 
              href="https://forms.gle/FCmG1rv1wPKz8twk8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="form-submit" 
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', marginBottom: '2.5rem' }}
            >
              Isi Formulir Pendaftaran 📝
            </a>

            <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: '2.5rem' }}></div>

            <div className="form-title" style={{ fontSize: '1.25rem' }}>Ada Pertanyaan?</div>
            <p className="form-sub">Jika kamu memiliki pertanyaan seputar kerelawanan, jangan ragu untuk menghubungi kami melalui WhatsApp.</p>
            
            <a 
              href="https://wa.me/6285216789586?text=Halo%20Admin%20TBM,%20saya%20punya%20pertanyaan%20terkait%20pendaftaran%20relawan." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="form-submit" 
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', backgroundColor: '#25D366', color: '#fff', border: 'none' }}
            >
              Hubungi via WhatsApp 💬
            </a>
          </div>
        </div>
      </section>

      <section id="kerjasama">
        <div className="kerjasama-intro">
          <div className="section-eyebrow">Kolaborasi &amp; Dukungan</div>
          <h2 className="section-title">Mari Bergerak Bersama</h2>
          <p className="section-desc">TBM Pustaka Berkiprah terbuka untuk berbagai bentuk kolaborasi dan dukungan dari institusi, komunitas, maupun individu yang peduli literasi.</p>
        </div>
        <div className="kerjasama-options" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '800px', margin: '2rem auto 0' }}>
          <div className="ks-card">
            <span className="ks-icon" style={{display: 'flex', justifyContent: 'center'}}><Package size={36} color="var(--earth)" strokeWidth={1.5} /></span>
            <div className="ks-title">Donasi Buku</div>
            <p className="ks-desc">Sumbangkan buku bacaan, alat tulis, atau perlengkapan belajar untuk mendukung kegiatan anak-anak dan remaja di TBM.</p>
            <a href="https://wa.me/6285216789586?text=Halo%20Admin%20TBM,%20saya%20tertarik%20untuk%20Donasi%20Buku." target="_blank" rel="noopener noreferrer" className="ks-link">Hubungi Kami →</a>
          </div>
          <div className="ks-card">
            <span className="ks-icon" style={{display: 'flex', justifyContent: 'center'}}><Search size={36} color="var(--earth)" strokeWidth={1.5} /></span>
            <div className="ks-title">Kunjungan &amp; Observasi</div>
            <p className="ks-desc">Bagi mahasiswa atau umum yang ingin melakukan kunjungan, observasi, dan penelitian di bidang pendidikan masyarakat dan literasi.</p>
            <a href="https://wa.me/6285216789586?text=Halo%20Tbm%20Pustaka%20Berkiprah%F0%9F%91%8B%F0%9F%8F%BB%2C%20saya%20ingin%20bertanya%20terkait%20kunjungan%20dan%20observasi." target="_blank" rel="noopener noreferrer" className="ks-link">Info Lebih Lanjut →</a>
          </div>
        </div>
      </section>

      <div className={`toast ${toastMsg ? 'show' : ''}`} id="toast">{toastMsg}</div>
    </>
  );
}

export default Relawan;
