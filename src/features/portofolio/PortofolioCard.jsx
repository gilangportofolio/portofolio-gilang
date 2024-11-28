import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImagePreview from './ImagePreview';
import './Portofolio.css';

const PortofolioCard = ({ item }) => {
  const [showPreview, setShowPreview] = useState(false);

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
        <div className="wadah-gambar">
          <img 
            src={item.images?.[0]?.url_gambar} 
            alt={item.judul}
            loading="lazy"
          />
          <div className="label-kategori">{item.kategori}</div>
          <button 
            className="tombol-pratinjau"
            onClick={() => setShowPreview(true)}
            aria-label="Pratinjau gambar"
          >
            <i className="fas fa-eye"></i>
          </button>
        </div>
        <div className="wadah-konten">
          <h3>{item.judul}</h3>
          <p>{item.deskripsi}</p>
          <div className="wadah-alat">
            {item.tools.map((tool, index) => (
              <span key={index} className="label-alat">
                {tool}
              </span>
            ))}
          </div>
          <div className="wadah-aksi">
            {item.tautan && (
              <a 
                href={item.tautan} 
                target="_blank" 
                rel="noopener noreferrer"
                className="tautan-situs"
              >
                <i className="fas fa-globe"></i>
                Lihat Website
              </a>
            )}
            <button className="tombol-detail">
              Detail
            </button>
          </div>
        </div>
      </motion.div>

      {showPreview && (
        <ImagePreview 
          images={item.images} 
          onClose={() => setShowPreview(false)} 
        />
      )}
    </>
  );
};

export default PortofolioCard; 