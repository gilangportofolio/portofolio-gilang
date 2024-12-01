import { useState } from 'react'
import ImageLightbox from './ImageLightbox'
import ExternalUrlHandler from '../utils/ExternalUrlHandler'

function MediaCarousel({ media }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)
  const [imageError, setImageError] = useState(false)

  if (!media?.length) return null;

  const getMediaUrl = (item) => {
    if (!item) return '';
    if (item.preview_url) return item.preview_url;
    if (item.is_external && item.url_asli) {
      const type = item.type || 'thumbnail';
      return ExternalUrlHandler.googleDrive.getPreviewUrl(item.url_asli, type);
    }
    return item.url_gambar || '';
  };

  const renderMedia = (item) => {
    if (!item) return null;

    // Untuk file Google Drive
    if (item.is_external) {
      const fileId = ExternalUrlHandler.googleDrive.extractFileId(item.url_gambar || item.preview_url);
      if (fileId) {
        return (
          <img
            src={`https://lh3.googleusercontent.com/d/${fileId}`}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-contain cursor-zoom-in"
            onClick={() => setShowLightbox(true)}
            onError={(e) => {
              e.target.src = ExternalUrlHandler.googleDrive.getPreviewUrl(fileId, 'thumbnail');
            }}
          />
        );
      }
    }

    // Untuk gambar non-external
    if (item.url_gambar) {
      return (
        <img
          src={item.url_gambar}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-contain cursor-zoom-in"
          onClick={() => setShowLightbox(true)}
          onError={() => setImageError(true)}
        />
      );
    }

    // Jika tidak ada URL yang valid
    return (
      <div className="text-center p-4">
        <p className="text-red-500">Media tidak tersedia</p>
        <p className="text-sm text-gray-500">ID: {item.id}</p>
      </div>
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

    if (item.is_external) {
      const fileId = ExternalUrlHandler.googleDrive.extractFileId(item.url_gambar || item.preview_url);
      if (fileId) {
        return (
          <img
            src={`https://lh3.googleusercontent.com/d/${fileId}`}
            alt={`Thumbnail ${index + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = ExternalUrlHandler.googleDrive.getPreviewUrl(fileId, 'thumbnail');
            }}
          />
        );
      }
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
        {media[currentIndex] ? renderMedia(media[currentIndex]) : (
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
        <ImageLightbox 
          url={getMediaUrl(media[currentIndex])}
          onClose={() => setShowLightbox(false)}
        />
      )}
    </div>
  );
}

export default MediaCarousel; 