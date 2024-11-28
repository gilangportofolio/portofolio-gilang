import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faInfoCircle, faEye } from '@fortawesome/free-solid-svg-icons';
import ImagePreview from './ImagePreview';
import DetailPortofolio from './DetailPortofolio';
import ToolsList from './ToolsList';
import './Portofolio.css';
import { getCategoryColor } from './usePortofolio';

const PortofolioCard = ({ item }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const categoryColor = getCategoryColor(item.kategori);

  const handleDetailClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowDetail(true);
  };

  const handleImageClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPreview(true);
  };

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="kartu-portofolio"
      >
        <div className="wadah-gambar" onClick={handleImageClick}>
          <img 
            src={item.images?.[0]?.url_gambar} 
            alt={item.judul}
            loading="lazy"
          />
          <div className="label-kategori" style={{ 
            '--category-bg': categoryColor.bg,
            '--category-text': categoryColor.text 
          }}>
            {item.kategori}
          </div>
        </div>
        <div className="wadah-konten">
          <div className="wadah-info">
            <h3>{item.judul}</h3>
            <p>{item.deskripsi}</p>
            <ToolsList tools={item.tools} />
          </div>
          <div className="wadah-aksi">
            <div className="wadah-aksi-kiri">
              {item.tautan && (
                <a 
                  href={item.tautan} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="tautan-situs"
                >
                  <FontAwesomeIcon icon={faGlobe} />
                  Lihat Website
                </a>
              )}
            </div>
            <div className="wadah-aksi-kanan">
              <button 
                className="tombol-detail"
                onClick={handleDetailClick}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Detail
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {showPreview && (
        <ImagePreview 
          images={item.images} 
          onClose={() => setShowPreview(false)} 
        />
      )}

      {showDetail && (
        <DetailPortofolio 
          item={item} 
          onClose={() => setShowDetail(false)} 
        />
      )}
    </>
  );
};

export default PortofolioCard; 