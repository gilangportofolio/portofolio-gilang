import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGlobe, faArrowRight, faFilePdf, faTimes } from '@fortawesome/free-solid-svg-icons';
import './DetailPortofolio.css';
import { useState, useEffect } from 'react';
import ImagePreview from './ImagePreview';

const DetailPortofolio = ({ item, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const isFileImage = (url) => {
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
  };

  const isFilePDF = (url) => {
    return /\.pdf$/i.test(url);
  };

  const renderCarouselItem = (file, index) => {
    if (isFileImage(file.url_gambar)) {
      return (
        <img 
          src={file.url_gambar} 
          alt={`${item.judul} - ${index + 1}`}
          onClick={() => handleImageClick(file, index)}
        />
      );
    } else if (isFilePDF(file.url_gambar)) {
      return (
        <div className="pdf-preview" onClick={() => handleImageClick(file, index)}>
          <FontAwesomeIcon icon={faFilePdf} size="3x" />
          <p>Klik untuk membuka PDF</p>
        </div>
      );
    }
    return null;
  };

  useEffect(() => {
    if (item.images?.length) {
      item.images.forEach((image, index) => {
        const img = new Image();
        img.src = image.url_gambar;
        img.onload = () => {
          setImagesLoaded(prev => ({
            ...prev,
            [index]: true
          }));
        };
      });
    }
  }, [item.images]);

  const handlePrevImage = () => {
    if (!item.images?.length) return;
    setCurrentImageIndex(prev => 
      prev === 0 ? item.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    if (!item.images?.length) return;
    setCurrentImageIndex(prev => 
      prev === item.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleImageClick = (file, index) => {
    if (isFilePDF(file.url_gambar)) {
      window.open(file.url_gambar, '_blank');
    } else if (isFileImage(file.url_gambar)) {
      setSelectedImageIndex(index);
      setShowImagePreview(true);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('portofolio-detail-page')) {
      onClose();
    }
  };

  return (
    <motion.div 
      className="portofolio-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleOverlayClick}
    >
      <button className="portofolio-kembali" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </button>
      <div className="portofolio-detail-wrapper">
        <div className="carousel-container">
          <div className="carousel-wrapper">
            {item.images?.map((file, index) => (
              <div 
                key={index}
                className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`}
              >
                {renderCarouselItem(file, index)}
              </div>
            ))}
          </div>

          {item.images?.length > 1 && (
            <>
              <button className="carousel-button prev" onClick={handlePrevImage}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button className="carousel-button next" onClick={handleNextImage}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </>
          )}
        </div>

        <div className="portofolio-info">
          <h1>{item.judul}</h1>
          <p className="portofolio-deskripsi">{item.deskripsi}</p>
          
          <div className="portofolio-poin">
            <h2>Fitur Utama:</h2>
            <ul>
              {item.poin?.map((poin, index) => (
                <li key={index}>{poin}</li>
              ))}
            </ul>
          </div>

          <div className="portofolio-tools">
            <h2>Tools yang digunakan:</h2>
            <div className="tools-list">
              {item.tools?.map((tool, index) => (
                <span key={index} className="tool-item">{tool}</span>
              ))}
            </div>
          </div>

          {item.tautan && (
            <a 
              href={item.tautan}
              target="_blank"
              rel="noopener noreferrer"
              className="tautan-website"
            >
              <FontAwesomeIcon icon={faGlobe} />
              Kunjungi Website
            </a>
          )}
        </div>
      </div>

      {showImagePreview && (
        <ImagePreview 
          images={item.images}
          initialIndex={selectedImageIndex}
          onClose={() => setShowImagePreview(false)}
        />
      )}
    </motion.div>
  );
};

export default DetailPortofolio; 