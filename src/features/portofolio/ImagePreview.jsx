import { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import './ImagePreview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const ImagePreview = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
    setIsLoading(true);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
    setIsLoading(true);
  };

  return (
    <div className="preview-overlay" onClick={onClose}>
      <div className="preview-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="image-container">
          <TransformWrapper
            initialScale={1}
            minScale={0.5}
            maxScale={3}
            wheel={{ wheelEnabled: true }}
            pinch={{ pinchEnabled: true }}
          >
            <TransformComponent>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="image-wrapper"
                >
                  {isLoading && <div className="loading-spinner" />}
                  <img
                    src={images[currentIndex].url_gambar}
                    alt={`Preview ${currentIndex + 1}`}
                    className="preview-image"
                    onLoad={handleImageLoad}
                    style={{ opacity: isLoading ? 0 : 1 }}
                  />
                </motion.div>
              </AnimatePresence>
            </TransformComponent>
          </TransformWrapper>

          {images.length > 1 && (
            <>
              <button className="nav-button prev" onClick={handlePrevious}>
                <FaChevronLeft />
              </button>
              <button className="nav-button next" onClick={handleNext}>
                <FaChevronRight />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview; 