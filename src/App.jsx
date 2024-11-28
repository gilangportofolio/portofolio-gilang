import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import TentangSaya from './pages/TentangSaya'
import Pendidikan from './pages/Pendidikan'
import Pengalaman from './pages/Pengalaman'
import Sertifikat from './pages/Sertifikat'
import Portofolio from './features/portofolio/Portofolio'
import logo from '/logogram.svg'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route index element={<Navigate to="/tentang-saya" replace />} />
          <Route path="/tentang-saya" element={<TentangSaya />} />
          <Route path="/pendidikan" element={<Pendidikan />} />
          <Route path="/pengalaman" element={<Pengalaman />} />
          <Route path="/sertifikat" element={<Sertifikat />} />
          <Route path="/portofolio/*" element={<Portofolio />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
