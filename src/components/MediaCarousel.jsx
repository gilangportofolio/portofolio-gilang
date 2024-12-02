import { useState, useEffect } from 'react'
import ImageLightbox from './ImageLightbox'
import ExternalUrlHandler from '../utils/ExternalUrlHandler'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { AiOutlineFilePdf } from 'react-icons/ai'

function MediaCarousel({ media, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)
  const [imageError, setImageError] = useState({})

  useEffect(() => {
    if (showLightbox) {
      document.body.classList.add('lightbox-open');
    } else {
      document.body.classList.remove('lightbox-open');
    }

    return () => {
      document.body.classList.remove('lightbox-open');
    };
  }, [showLightbox]);

  if (!media?.length) return null;

  const isPDF = (url) => {
    return url?.toLowerCase().endsWith('.pdf');
  };

  const getPDFThumbnail = (item) => {
    return '/images/pdf-thumbnail.png';
  };

  const handleMediaClick = (item) => {
    if (isPDF(item.url_gambar)) {
      window.open(item.url_gambar, '_blank');
    } else {
      setShowLightbox(true);
      if (onImageClick) onImageClick(item);
    }
  };

  const renderPDFThumbnail = () => {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <AiOutlineFilePdf className="w-20 h-20 text-red-500" />
      </div>
    );
  };

  const renderMedia = (item) => {
    if (!item) return null;

    if (item.url_gambar?.toLowerCase().endsWith('.pdf')) {
      return (
        <div 
          className="relative w-full h-full cursor-pointer hover:opacity-80"
          onClick={() => window.open(item.url_gambar, '_blank')}
        >
          {renderPDFThumbnail()}
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center">
            Klik untuk membuka PDF
          </div>
        </div>
      );
    }

    const getUrl = () => {
      if (isPDF(item.url_gambar)) {
        return getPDFThumbnail(item);
      }

      if (item.is_external) {
        const fileId = ExternalUrlHandler.googleDrive.extractFileId(item.url_gambar);
        if (fileId) {
          return ExternalUrlHandler.googleDrive.getPreviewUrl(fileId, 'preview')[0];
        }
      }
      return item.url_gambar;
    };

    return (
      <div className="relative w-full h-full">
        <img 
          src={getUrl()}
          alt="Preview"
          className="w-full h-full object-contain cursor-zoom-in"
          onClick={() => {
            setShowLightbox(true);
            if (onImageClick) onImageClick(item);
          }}
          loading="lazy"
          onError={(e) => {
            if (item.is_external) {
              const fileId = ExternalUrlHandler.googleDrive.extractFileId(item.url_gambar);
              if (fileId) {
                e.target.src = ExternalUrlHandler.googleDrive.getFallbackUrl(item.url_gambar, 0);
              }
            }
            setImageError(prev => ({ ...prev, [item.id]: true }));
          }}
        />
      </div>
    );
  };

  const renderThumbnail = (item, index) => {
    if (!item) return null;

    if (item.url_gambar?.toLowerCase().endsWith('.pdf')) {
      return (
        <div className="relative w-full h-full">
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <AiOutlineFilePdf className="w-8 h-8 text-red-500" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 text-center">
            PDF
          </div>
        </div>
      );
    }

    const getThumbnailUrl = () => {
      if (item.is_external) {
        const fileId = ExternalUrlHandler.googleDrive.extractFileId(item.url_gambar);
        if (fileId) {
          return ExternalUrlHandler.googleDrive.getPreviewUrl(fileId, 'thumbnail')[0];
        }
      }
      return item.url_gambar;
    };

    return (
      <img
        src={getThumbnailUrl()}
        alt={`Thumbnail ${index + 1}`}
        className="w-full h-full object-cover"
        onError={(e) => {
          if (item.is_external) {
            const fileId = ExternalUrlHandler.googleDrive.extractFileId(item.url_gambar);
            if (fileId) {
              // Coba URL thumbnail alternatif
              e.target.src = `https://drive.google.com/thumbnail?id=${fileId}&sz=w500`;
            }
          }
        }}
      />
    );
  };

  const renderLightboxContent = (item) => {
    if (!item) return null;

    const getLightboxUrl = () => {
      if (item.is_external) {
        const fileId = ExternalUrlHandler.googleDrive.extractFileId(item.url_gambar);
        if (fileId) {
          return ExternalUrlHandler.googleDrive.getPreviewUrl(fileId, 'preview')[0];
        }
      }
      return item.url_gambar;
    };

    return (
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={4}
        centerOnInit={true}
        doubleClick={{ mode: "reset" }}
      >
        <TransformComponent>
          <img 
            src={getLightboxUrl()}
            alt="Preview"
            className="w-full h-full object-contain"
            onError={(e) => {
              console.error('Lightbox image error'); // Debug lightbox error
              const fileId = ExternalUrlHandler.googleDrive.extractFileId(item.url_gambar);
              if (fileId) {
                e.target.src = ExternalUrlHandler.googleDrive.getFallbackUrl(item.url_gambar, 0);
              }
            }}
          />
        </TransformComponent>
      </TransformWrapper>
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === media.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative mb-6 touch-pan-y">
      <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
        {media[currentIndex] && !imageError[media[currentIndex].id] ? (
          renderMedia(media[currentIndex])
        ) : (
          <div className="text-center p-4">
            <p className="text-red-500">Media tidak tersedia</p>
          </div>
        )}
        
        {media.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              →
            </button>
          </>
        )}
      </div>

      {media.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {media.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                currentIndex === index ? 'border-emerald-500' : 'border-transparent'
              }`}
            >
              {renderThumbnail(item, index)}
            </button>
          ))}
        </div>
      )}

      {showLightbox && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center">
          <button 
            onClick={() => setShowLightbox(false)}
            className="fixed top-4 right-4 text-white text-xl p-4 z-[10000] bg-black/50 rounded-full hover:bg-black/70"
            aria-label="Close"
          >
            ✕
          </button>
          {renderLightboxContent(media[currentIndex])}
        </div>
      )}
    </div>
  );
}

export default MediaCarousel; 