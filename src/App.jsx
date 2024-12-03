import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from './utils/analytics'
import Header from './components/Header'
import Footer from './components/Footer'
import TentangSaya from './pages/TentangSaya'
import Pendidikan from './pages/Pendidikan'
import Pengalaman from './pages/Pengalaman'
import Sertifikat from './pages/Sertifikat'
import Portofolio from './portofolio/Portofolio'
import ErrorBoundary from './components/ErrorBoundary'
import ThemeSwitcher from './components/ThemeSwitcher'

function App() {
  const location = useLocation()

  useEffect(() => {
    trackPageView()
  }, [location.pathname])

  return (
    <ErrorBoundary>
      <div id="modal-root" />
      
      <div className="app-wrapper relative">
        <div className="min-h-screen flex flex-col relative">
          <Header />
          <main className="flex-1 mt-[60px] relative z-[1]">
            <Routes>
              <Route path="/" element={<Navigate to="/tentang-saya" replace />} />
              <Route path="/tentang-saya" element={
                <ErrorBoundary key="tentang-saya">
                  <TentangSaya />
                </ErrorBoundary>
              } />
              <Route path="/pendidikan" element={
                <ErrorBoundary key="pendidikan">
                  <Pendidikan />
                </ErrorBoundary>
              } />
              <Route path="/pengalaman" element={
                <ErrorBoundary key="pengalaman">
                  <Pengalaman />
                </ErrorBoundary>
              } />
              <Route path="/sertifikat" element={
                <ErrorBoundary key="sertifikat">
                  <Sertifikat />
                </ErrorBoundary>
              } />
              <Route path="/portofolio/*" element={
                <ErrorBoundary key="portofolio">
                  <Portofolio />
                </ErrorBoundary>
              } />
              <Route path="*" element={<Navigate to="/tentang-saya" replace />} />
            </Routes>
          </main>
          <Footer />
          <ThemeSwitcher />
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default App
