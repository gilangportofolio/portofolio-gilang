import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from './utils/analytics'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorBoundary from './components/ErrorBoundary'
import ThemeSwitcher, { ThemeProvider } from './components/ThemeSwitcher'
import BackgroundDecorations from './components/BackgroundDecorations'

// Lazy load semua pages
const TentangSaya = lazy(() => import('./pages/TentangSaya'))
const Pendidikan = lazy(() => import('./pages/Pendidikan'))
const Pengalaman = lazy(() => import('./pages/Pengalaman'))
const Sertifikat = lazy(() => import('./pages/Sertifikat'))
const Portofolio = lazy(() => import('./portofolio/Portofolio'))

function App() {
  const location = useLocation()

  useEffect(() => {
    trackPageView()
  }, [location.pathname])

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div id="modal-root" />
        
        <div className="app-wrapper min-h-screen flex flex-col relative">
          <BackgroundDecorations />
          <Header />
          <main className="flex-1 mt-[60px]">
            <Routes>
              <Route path="/" element={<Navigate to="/tentang-saya" replace />} />
              <Route path="/tentang-saya" element={
                <ErrorBoundary key="tentang-saya">
                  <Suspense fallback={<LoadingSpinner />}>
                    <TentangSaya />
                  </Suspense>
                </ErrorBoundary>
              } />
              <Route path="/pendidikan" element={
                <ErrorBoundary key="pendidikan">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Pendidikan />
                  </Suspense>
                </ErrorBoundary>
              } />
              <Route path="/pengalaman" element={
                <ErrorBoundary key="pengalaman">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Pengalaman />
                  </Suspense>
                </ErrorBoundary>
              } />
              <Route path="/sertifikat" element={
                <ErrorBoundary key="sertifikat">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Sertifikat />
                  </Suspense>
                </ErrorBoundary>
              } />
              <Route path="/portofolio/*" element={
                <ErrorBoundary key="portofolio">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Portofolio />
                  </Suspense>
                </ErrorBoundary>
              } />
              <Route path="*" element={<Navigate to="/tentang-saya" replace />} />
            </Routes>
          </main>
          <Footer />
          <ThemeSwitcher />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App