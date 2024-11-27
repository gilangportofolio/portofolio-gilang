import { motion } from 'framer-motion'

const DesignLayout = ({ project }) => {
  const thumbnailImage = project.images?.find(img => img.tipe === 'thumbnail')?.url_gambar || '';
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="design-card"
    >
      <div className="image-container">
        {thumbnailImage && (
          <img 
            src={thumbnailImage}
            alt={project.judul}
            className="design-image"
          />
        )}
        <div className="overlay">
          <a href={project.tautan} target="_blank" rel="noopener noreferrer" className="view-btn">
            Lihat Detail
          </a>
        </div>
      </div>
      <div className="content">
        <h3 className="title">{project.judul || 'Untitled'}</h3>
        <span className="category-badge">{project.kategori}</span>
        <p className="description">{project.deskripsi}</p>
        <div className="tools">
          {project.tools?.map((tool, idx) => (
            <span key={idx} className="tool-badge">{tool}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default DesignLayout 