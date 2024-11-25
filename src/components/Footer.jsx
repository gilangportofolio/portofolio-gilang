import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Hire Me Section */}
        <div className="footer-section">
          <h3>Hire Me</h3>
          <p>gilangpp17@gmail.com</p>
          <div className="social-icons">
            <a href="#facebook"><FaFacebook size={20} /></a>
            <a href="#twitter"><FaTwitter size={20} /></a>
            <a href="#linkedin"><FaLinkedin size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/about">About</Link>
          <Link to="/category">Category</Link>
          <Link to="/testimonial">Testimonial</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Location */}
        <div className="footer-section">
          <h3>Location</h3>
          <p>Kota Bandung Jawa Barat</p>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.57311687144541!3d-6.903444341687889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1682763145659!5m2!1sen!2sid" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        Gilang Pratama Putra © {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
