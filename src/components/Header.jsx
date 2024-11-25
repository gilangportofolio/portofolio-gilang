import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaChevronDown, FaUserCircle } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'
import '../styles/Header.css'

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsDropdownOpen(false)
    setIsMobileMenuOpen(false)
  }, [location])

  const isActive = (path) => location.pathname === path

  return (
    <header>
      <nav className="nav-container py-3">
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
              <div className="dropdown-menu">
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
              </div>
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

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button absolute right-4"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <HiMenu size={24} />
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : 'closed'}`}>
          <Link to="/tentang-saya" className="mobile-nav-link">
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
              onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
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
              <Link to="/portofolio/all" className="mobile-dropdown-item">
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
