import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Literasi from './pages/Literasi';
import Belajar from './pages/Belajar';
import Kegiatan from './pages/Kegiatan';
import Relawan from './pages/Relawan';
import SumbanganBuku from './pages/SumbanganBuku';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="literasi" element={<Literasi />} />
          <Route path="belajar" element={<Belajar />} />
          <Route path="kegiatan" element={<Kegiatan />} />
          <Route path="relawan" element={<Relawan />} />
          <Route path="sumbangan-buku" element={<SumbanganBuku />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
