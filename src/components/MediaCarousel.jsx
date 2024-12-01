import { useState, useEffect } from 'react'
import ImageLightbox from './ImageLightbox'
import ExternalUrlHandler from '../utils/ExternalUrlHandler'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

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

  const getMediaUrl = (item) => {
    if (!item) return '';
    if (item.preview_url) return item.preview_url;
    
    if (item.is_external && item.url_asli) {
      const fileId = ExternalUrlHandler.googleDrive.extractFileId(item.url_asli);
      if (fileId) {
        return ExternalUrlHandler.googleDrive.getPreviewUrl(fileId);
      }
    }
    return item.url_gambar || '';
  };

  const renderMedia = (item) => {
    if (item.isGoogleDrive) {
      return (
        <div className="relative w-full h-full">
          <img
            src={item.url}
            alt="Preview"
            className="w-full h-full object-contain cursor-zoom-in"
            loading="lazy"
            onClick={() => setShowLightbox(true)}
            onError={(e) => {
              if (!imageError[item.fileId]) {
                setImageError(prev => ({ ...prev, [item.fileId]: true }));
                e.target.src = `https://lh3.googleusercontent.com/d/${item.fileId}`;
              }
            }}
          />
        </div>
      );
    }
    
    return (
      <img
        src={item.url}
        alt="Preview"
        className="w-full h-full object-contain cursor-zoom-in"
        loading="lazy"
        onClick={() => setShowLightbox(true)}
      />
    );
  };

  const renderLightboxContent = (item) => {
    if (!item) return null;

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
            src={item.url}
            alt="Preview"
            className="w-full h-full object-contain"
            loading="lazy"
            onError={(e) => {
              if (!imageError[item.fileId]) {
                setImageError(prev => ({ ...prev, [item.fileId]: true }));
                e.target.src = `https://lh3.googleusercontent.com/d/${item.fileId}`;
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

  const renderThumbnail = (item, index) => {
    if (!item) return null;

    if (item.isGoogleDrive) {
      return (
        <img
          src={item.preview_url}
          alt={`Thumbnail ${index + 1}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            console.log('Thumbnail error for:', item.fileId);
            if (!imageError[item.fileId]) {
              setImageError(prev => ({ ...prev, [item.fileId]: true }));
              // Gunakan format thumbnail sebagai fallback
              e.target.src = ExternalUrlHandler.googleDrive.getPreviewUrl(item.fileId, 'thumbnail');
            }
          }}
        />
      );
    }

    return (
      <img
        src={item.url_gambar}
        alt={`Thumbnail ${index + 1}`}
        className="w-full h-full object-cover"
      />
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