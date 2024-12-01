import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'
import '../styles/Hp.css'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && 
          !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const header = document.querySelector('header');
    console.log('Header mounted, z-index:', window.getComputedStyle(header).zIndex);
  }, []);

  const isActive = (path) => location.pathname === path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white">
      <nav className="nav-container">
        <div className="nav-menu">
          <Link 
            to="/tentang-saya" 
            className={`nav-link ${isActive('/tentang-saya') ? 'active' : ''}`}
          >
            Tentang Saya
          </Link>
          <Link 
            to="/pendidikan"
            className={`nav-link ${isActive('/pendidikan') ? 'active' : ''}`}
          >
            Pendidikan
          </Link>
          <Link 
            to="/pengalaman"
            className={`nav-link ${isActive('/pengalaman') ? 'active' : ''}`}
          >
            Pengalaman
          </Link>
          <Link 
            to="/sertifikat"
            className={`nav-link ${isActive('/sertifikat') ? 'active' : ''}`}
          >
            Sertifikat
          </Link>
          <Link 
            to="/portofolio/all"
            className={`nav-link ${location.pathname.includes('/portofolio') ? 'active' : ''}`}
          >
            Portofolio
          </Link>
        </div>

        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <HiMenu size={28} />
        </button>

        {isMobileMenuOpen && (
          <div 
            className="mobile-menu-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <div 
          className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <Link 
            to="/tentang-saya" 
            className="mobile-nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tentang Saya
          </Link>
          <Link 
            to="/pendidikan" 
            className="mobile-nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pendidikan
          </Link>
          <Link 
            to="/pengalaman" 
            className="mobile-nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pengalaman
          </Link>
          <Link 
            to="/sertifikat" 
            className="mobile-nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sertifikat
          </Link>
          <Link 
            to="/portofolio/all" 
            className="mobile-nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portofolio
          </Link>

          <a 
            href="https://admin-gray-seven-69.vercel.app/"
            className="mobile-admin-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaUserCircle size={20} />
            <span>Admin Area</span>
          </a>
        </div>
      </nav>

      <div className="border-bottom-gradient"></div>
    </header>
  )
}

export default Header
