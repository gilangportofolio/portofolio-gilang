import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaChevronDown, FaUserCircle } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'
import '../styles/Hp.css'
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsDropdownOpen(false)
    setIsMobileMenuOpen(false)
  }, [location])

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

  const isActive = (path) => location.pathname === path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isPortfolioOpen) setIsPortfolioOpen(false);
  };

  const togglePortfolioDropdown = (e) => {
    e.stopPropagation();
    setIsPortfolioOpen(!isPortfolioOpen);
  };

  return (
    <header className="safe-area-top">
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
            Pengalaman Saya
          </Link>
          <Link 
            to="/sertifikat"
            className={`nav-link ${isActive('/sertifikat') ? 'active' : ''}`}
          >
            Sertifikat
          </Link>
          
          {/* Portofolio Dropdown */}
          <div className="dropdown-container">
            <button 
              className={`nav-link flex items-center ${
                location.pathname.includes('/portofolio') ? 'active' : ''
              }`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>Portofolio</span>
              <FaChevronDown 
                className={`ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                size={12}
              />
            </button>

            {isDropdownOpen && (
              <AnimatePresence>
                <motion.div 
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to="/portofolio/all" className="dropdown-item">
                    Semua Projek
                  </Link>
                  <Link to="/portofolio/website" className="dropdown-item">
                    Website
                  </Link>
                  <Link to="/portofolio/sistem-analis" className="dropdown-item">
                    Sistem Analis
                  </Link>
                  <Link to="/portofolio/bisnis-analis" className="dropdown-item">
                    Bisnis Analis
                  </Link>
                  <Link to="/portofolio/desain-ui" className="dropdown-item">
                    Desain UI
                  </Link>
                  <Link to="/portofolio/desain-visual" className="dropdown-item">
                    Desain Visual
                  </Link>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>

        {/* Admin icon absolute positioned */}
        <div className="admin-icon">
          <a 
            href="https://admin-gray-seven-69.vercel.app/" 
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Admin Area"
          >
            <FaUserCircle size={24} />
          </a>
        </div>

        {/* Mobile Menu Button dengan aria-label */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <HiMenu size={28} />
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu dengan gesture handling */}
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
          <Link to="/pendidikan" className="mobile-nav-link">
            Pendidikan
          </Link>
          <Link to="/pengalaman" className="mobile-nav-link">
            Pengalaman
          </Link>
          <Link to="/sertifikat" className="mobile-nav-link">
            Sertifikat
          </Link>
          
          {/* Portofolio Dropdown */}
          <div className="mobile-dropdown">
            <button 
              className="mobile-dropdown-header"
              onClick={togglePortfolioDropdown}
            >
              <span>Portofolio</span>
              <svg 
                className={`w-4 h-4 transition-transform ${isPortfolioOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`mobile-dropdown-content ${isPortfolioOpen ? 'open' : ''}`}>
              <Link 
                to="/portofolio/all" 
                className="mobile-dropdown-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Semua Projek
              </Link>
              <Link to="/portofolio/website" className="mobile-dropdown-item">
                Website
              </Link>
              <Link to="/portofolio/sistem-analis" className="mobile-dropdown-item">
                Sistem Analis
              </Link>
              <Link to="/portofolio/bisnis-analis" className="mobile-dropdown-item">
                Bisnis Analis
              </Link>
              <Link to="/portofolio/desain-ui" className="mobile-dropdown-item">
                Desain UI
              </Link>
              <Link to="/portofolio/desain-visual" className="mobile-dropdown-item">
                Desain Visual
              </Link>
            </div>
          </div>

          {/* Admin Link */}
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

      {/* Border bottom dengan gradasi */}
      <div className="border-bottom-gradient"></div>
    </header>
  )
}

export default Header
