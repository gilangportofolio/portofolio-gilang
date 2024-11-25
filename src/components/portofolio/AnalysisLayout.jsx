import { motion } from 'framer-motion'

const AnalysisLayout = ({ project }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="analysis-card"
  >
    <div className="header">
      <div>
        <h3 className="title">{project.judul}</h3>
        <span className="category-badge">{project.kategori}</span>
      </div>
      <span className="date">{new Date(project.waktu_publish).toLocaleDateString()}</span>
    </div>
    <div className="content">
      <p className="description">{project.deskripsi}</p>
      <div className="deliverables">
        <h4>Key Points:</h4>
        <ul>
          {project.poin?.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="tools">
        <h4>Tools & Methods:</h4>
        {project.tools?.map((tool, idx) => (
          <span key={idx} className="tool-badge">{tool}</span>
        ))}
      </div>
      <a href={project.tautan} target="_blank" rel="noopener noreferrer" className="doc-btn">
        View Documentation
      </a>
    </div>
  </motion.div>
)

export default AnalysisLayout 