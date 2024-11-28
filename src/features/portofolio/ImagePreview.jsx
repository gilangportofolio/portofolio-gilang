import { useState, useEffect } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './ImagePreview.css';

const ImagePreview = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    images.forEach((image, index) => {
      const img = new Image();
      img.src = image.url_gambar;
      img.onload = () => {
        setLoadedImages(prev => ({
          ...prev,
          [index]: true
        }));
      };
    });
  }, [images]);

  const handlePrevious = (e) => {
    e.stopPropagation();
    setIsLoading(true);
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? images.length - 1 : prev - 1;
      return newIndex;
    });
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setIsLoading(true);
    setCurrentIndex((prev) => {
      const newIndex = prev >= images.length - 1 ? 0 : prev + 1;
      return newIndex;
    });
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="preview-overlay" onClick={onClose}>
      <div className="preview-container" onClick={handleContainerClick}>
        <button className="close-button" onClick={onClose}>
          <IoClose size={24} />
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
                  onClick={(e) => e.stopPropagation()}
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
                <IoIosArrowBack size={24} />
              </button>
              <button className="nav-button next" onClick={handleNext}>
                <IoIosArrowForward size={24} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview; 