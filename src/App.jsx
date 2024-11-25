import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import TentangSaya from './pages/TentangSaya'
import Pendidikan from './pages/Pendidikan'
import Pengalaman from './pages/Pengalaman'
import Sertifikat from './pages/Sertifikat'
import Portofolio from './pages/Portofolio'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/tentang-saya" />} />
          <Route path="/tentang-saya" element={<TentangSaya />} />
          <Route path="/pendidikan" element={<Pendidikan />} />
          <Route path="/pengalaman" element={<Pengalaman />} />
          <Route path="/sertifikat" element={<Sertifikat />} />
          <Route path="/portofolio/*" element={<Portofolio />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
