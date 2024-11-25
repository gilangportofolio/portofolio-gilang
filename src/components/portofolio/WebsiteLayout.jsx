import { motion } from 'framer-motion'

const WebsiteLayout = ({ project }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="website-card"
  >
    <div className="image-container">
      <img 
        src={project.images.find(img => img.tipe === 'thumbnail')?.url_gambar}
        alt={project.judul}
        className="website-image"
      />
      <div className="overlay">
        <div className="buttons">
          <a href={project.tautan} target="_blank" rel="noopener noreferrer" className="demo-btn">
            Live Demo
          </a>
          <a href={project.tautan} target="_blank" rel="noopener noreferrer" className="code-btn">
            Source Code
          </a>
        </div>
      </div>
    </div>
    <div className="content">
      <h3 className="title">{project.judul}</h3>
      <p className="description">{project.deskripsi}</p>
      <div className="points">
        {project.poin?.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </div>
      <div className="tools">
        {project.tools?.map((tool, idx) => (
          <span key={idx} className="tool-badge">{tool}</span>
        ))}
      </div>
    </div>
  </motion.div>
)

export default WebsiteLayout 