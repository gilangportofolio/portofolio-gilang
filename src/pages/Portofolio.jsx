import { useState, useEffect } from 'react'
import supabase from '../config/supabaseClient'
import DesignLayout from '../components/portofolio/DesignLayout'
import WebsiteLayout from '../components/portofolio/WebsiteLayout'
import AnalysisLayout from '../components/portofolio/AnalysisLayout'
import '../styles/Portofolio.css'
import { useLocation } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'

const Portofolio = () => {
  const location = useLocation()
  const category = location.pathname.split('/')[2]

  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState(category === 'all' ? 'all' : category)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('portofolios')
          .select(`
            *,
            images (
              url_gambar,
              tipe
            )
          `)
        
        if (error) throw error
        setProjects(data)
      } catch (error) {
        console.error('Error:', error)
      } finally {
        setTimeout(() => setLoading(false), 500)
      }
    }

    fetchProjects()
  }, [])

  useEffect(() => {
    const urlCategory = location.pathname.split('/')[2]
    setActiveFilter(urlCategory === 'all' ? 'all' : urlCategory)
  }, [location])

  const getCategoryFromPath = (path) => {
    const categoryMap = {
      'website': 'Website',
      'sistem-analis': 'System Analysis',
      'desain-ui': 'UI/UX Design',
      'desain-visual': 'Visual Design'
    }
    return categoryMap[path] || path
  }

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true
    return project.kategori === getCategoryFromPath(activeFilter)
  })

  const renderProject = (project) => {
    if (project.kategori.includes('Design') || project.kategori.includes('Visual')) {
      return <DesignLayout project={project} />
    } else if (project.kategori.includes('Website')) {
      return <WebsiteLayout project={project} />
    } else if (project.kategori.includes('Analysis') || project.kategori.includes('Sistem')) {
      return <AnalysisLayout project={project} />
    }
    return null
  }

  // Kategori yang tersedia
  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'ui-ux', label: 'UI/UX Design' },
    { id: 'visual', label: 'Visual Design' },
    { id: 'website', label: 'Website' },
    { id: 'system', label: 'System Analysis' },
    { id: 'business', label: 'Business Analysis' }  // Tambah kategori Business Analysis
  ]

  if (loading) return <LoadingSpinner />

  return (
    <section className="portofolio-section">
      <div className="container">
        {/* Filter Buttons */}
        <div className="filter-buttons">
          {categories.map((category) => (
            <button 
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects
            .filter(project => {
              if (activeFilter === 'all') return true;
              
              // Mapping filter ke kategori di database
              const filterMap = {
                'ui-ux': 'UI/UX Design',
                'visual': 'Visual Design',
                'website': 'Website',
                'system': 'System Analysis',
                'business': 'Business Analysis'
              };
              
              return project.kategori === filterMap[activeFilter];
            })
            .map((project) => (
              <div key={project.id} className="project-item">
                {renderProject(project)}
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Portofolio 