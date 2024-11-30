import { FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <aside className="brand-section">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-3xl md:text-4xl text-[#fd6529] font-bold">@</div>
            <h2 className="text-lg md:text-xl font-bold">Gilang Pratama Putra</h2>
          </div>
          <p className="text-sm text-gray-600">Copyright 2024 - Portofolio</p>
        </aside>
        
        <nav className="social-section">
          <h6 className="footer-title text-black text-center md:text-left mb-3 font-semibold">
            CONNECT ME
          </h6>
          <div className="social-icons">
          <a 
  href="https://www.linkedin.com/in/gilangpratamaputra/" 
  className="social-icon-link linkedin"
  aria-label="LinkedIn"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaLinkedin size={24} />
</a>

<a 
  href="https://www.youtube.com/@gilangportofolio" 
  className="social-icon-link youtube"
  aria-label="YouTube"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaYoutube size={24} />
</a>

<a 
  href="https://www.instagram.com/gilang.pputraa/" 
  className="social-icon-link instagram"
  aria-label="Instagram"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaInstagram size={24} />
</a>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
