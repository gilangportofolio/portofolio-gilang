import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import TentangSaya from './pages/TentangSaya'
import Pendidikan from './pages/Pendidikan'
import Pengalaman from './pages/Pengalaman'
import Sertifikat from './pages/Sertifikat'
import Portofolio from './portofolio/Portofolio'
import ErrorBoundary from './components/ErrorBoundary'
import logo from '/logogram.svg'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-[60px]">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Navigate to="/tentang-saya" replace />} />
            <Route path="/tentang-saya" element={<TentangSaya />} />
            <Route path="/pendidikan" element={<Pendidikan />} />
            <Route path="/pengalaman" element={<Pengalaman />} />
            <Route path="/sertifikat" element={<Sertifikat />} />
            <Route path="/portofolio/*" element={<Portofolio />} />
            <Route path="*" element={<Navigate to="/tentang-saya" replace />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  )
}

export default App
