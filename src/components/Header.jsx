import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'
import { useTheme } from './ThemeSwitcher'
import '../styles/Hp.css'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { currentTheme } = useTheme()

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
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isModalOpen = document.body.classList.contains('modal-open')
          setIsModalVisible(isModalOpen)
        }
      })
    })

    observer.observe(document.body, {
      attributes: true
    })

    return () => observer.disconnect()
  }, [])

  const isActive = (path) => location.pathname === path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md transition-all duration-300 ${
      isModalVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      <nav className="nav-container">
        <div className="nav-menu">
          <Link 
            to="/tentang-saya" 
            className="nav-link relative group overflow-hidden text-gray-800"
          >
            <span className="relative z-10 transition-colors duration-300"
                  style={{ 
                    color: isActive('/tentang-saya') 
                      ? `var(--color-${currentTheme === 'default' ? 'primary' : currentTheme})`
                      : 'currentColor'
                  }}>
              Tentang Saya
            </span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 transition-all duration-300 transform 
                           group-hover:opacity-100 group-hover:w-full"
                  style={{ 
                    background: `var(--gradient-${currentTheme === 'default' ? 'primary' : currentTheme})`,
                    width: isActive('/tentang-saya') ? '100%' : '0%',
                    opacity: isActive('/tentang-saya') ? '1' : '0'
                  }} />
          </Link>

          <Link 
            to="/pendidikan"
            className="nav-link relative group overflow-hidden text-gray-800"
          >
            <span className="relative z-10 transition-colors duration-300"
                  style={{ 
                    color: isActive('/pendidikan') 
                      ? `var(--color-${currentTheme === 'default' ? 'primary' : currentTheme})`
                      : 'currentColor'
                  }}>
              Pendidikan
            </span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 transition-all duration-300 transform 
                           group-hover:opacity-100 group-hover:w-full"
                  style={{ 
                    background: `var(--gradient-${currentTheme === 'default' ? 'primary' : currentTheme})`,
                    width: isActive('/pendidikan') ? '100%' : '0%',
                    opacity: isActive('/pendidikan') ? '1' : '0'
                  }} />
          </Link>

          <Link 
            to="/pengalaman"
            className="nav-link relative group overflow-hidden text-gray-800"
          >
            <span className="relative z-10 transition-colors duration-300"
                  style={{ 
                    color: isActive('/pengalaman') 
                      ? `var(--color-${currentTheme === 'default' ? 'primary' : currentTheme})`
                      : 'currentColor'
                  }}>
              Pengalaman
            </span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 transition-all duration-300 transform 
                           group-hover:opacity-100 group-hover:w-full"
                  style={{ 
                    background: `var(--gradient-${currentTheme === 'default' ? 'primary' : currentTheme})`,
                    width: isActive('/pengalaman') ? '100%' : '0%',
                    opacity: isActive('/pengalaman') ? '1' : '0'
                  }} />
          </Link>

          <Link 
            to="/sertifikat"
            className="nav-link relative group overflow-hidden text-gray-800"
          >
            <span className="relative z-10 transition-colors duration-300"
                  style={{ 
                    color: isActive('/sertifikat') 
                      ? `var(--color-${currentTheme === 'default' ? 'primary' : currentTheme})`
                      : 'currentColor'
                  }}>
              Sertifikat
            </span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 transition-all duration-300 transform 
                           group-hover:opacity-100 group-hover:w-full"
                  style={{ 
                    background: `var(--gradient-${currentTheme === 'default' ? 'primary' : currentTheme})`,
                    width: isActive('/sertifikat') ? '100%' : '0%',
                    opacity: isActive('/sertifikat') ? '1' : '0'
                  }} />
          </Link>

          <Link 
            to="/portofolio/all"
            className="nav-link relative group overflow-hidden text-gray-800"
          >
            <span className="relative z-10 transition-colors duration-300"
                  style={{ 
                    color: isActive('/portofolio') 
                      ? `var(--color-${currentTheme === 'default' ? 'primary' : currentTheme})`
                      : 'currentColor'
                  }}>
              Portofolio
            </span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 transition-all duration-300 transform 
                           group-hover:opacity-100 group-hover:w-full"
                  style={{ 
                    background: `var(--gradient-${currentTheme === 'default' ? 'primary' : currentTheme})`,
                    width: isActive('/portofolio') ? '100%' : '0%',
                    opacity: isActive('/portofolio') ? '1' : '0'
                  }} />
          </Link>
        </div>

        <div className="nav-right">
          <a 
            href="https://admin-gray-seven-69.vercel.app/"
            className="admin-link group relative overflow-hidden px-4 py-2 rounded-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: `linear-gradient(to right, var(--color-${currentTheme === 'default' ? 'primary' : currentTheme})15, transparent)`
            }}
          >
            <span className="flex items-center gap-2 relative z-10" 
                  style={{ color: `var(--color-${currentTheme === 'default' ? 'primary' : currentTheme})` }}>
              <FaUserCircle size={20} className="transition-transform group-hover:rotate-12" />
              <span className="font-medium">Admin</span>
            </span>
          </a>
        </div>

        <button 
          className="mobile-menu-button relative z-50 p-2 rounded-lg transition-colors duration-300"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          style={{
            background: isMobileMenuOpen 
              ? `linear-gradient(to right, var(--color-${currentTheme === 'default' ? 'primary' : currentTheme})15, transparent)`
              : 'transparent'
          }}
        >
          <HiMenu size={28} style={{ color: `var(--color-${currentTheme === 'default' ? 'primary' : currentTheme})` }} />
        </button>

        {isMobileMenuOpen && (
          <div 
            className="mobile-menu-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <div 
          className={`mobile-menu transform transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            bg-white/90 backdrop-blur-lg`}
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

      <div 
        className="border-bottom-gradient h-0.5"
        style={{ 
          background: `var(--gradient-${currentTheme === 'default' ? 'primary' : currentTheme})`
        }}
      />
    </header>
  )
}

// Add CSS to your styles
const styles = `
  .nav-link:hover span {
    color: var(--color-primary) !important;
  }
`;

// Add style tag to head
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Header
