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
        const { data: testData, error: testError } = await supabase
          .from('portofolios')
          .select('*')
        
        console.log('Test Query Result:', { data: testData, error: testError })
        
        if (testError) {
          console.error('Test Query Error:', testError)
          return
        }

        const { data, error } = await supabase
          .from('portofolios')
          .select(`
            *,
            images (
              id,
              url_gambar,
              tipe
            ),
            tools,
            poin
          `)
          .order('waktu_publish', { ascending: false })
        
        if (error) {
          console.error('Main Query Error:', error)
          throw error
        }
        
        console.log('Data dari database:', data)
        
        const transformedData = data.map(project => ({
          ...project,
          tools: Array.isArray(project.tools) ? project.tools : [],
          poin: Array.isArray(project.poin) ? project.poin : []
        }))
        
        setProjects(transformedData)
      } catch (error) {
        console.error('Error:', error.message)
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

  const categoryMapping = {
    'ui-ux': ['ui-ux', 'UI/UX Design'],
    'visual': ['visual-design', 'Visual Design'],
    'website': ['website', 'Website'],
    'system': ['sistem', 'Sistem Informasi', 'System Analysis'],
    'business': ['business-analysis', 'Business Analysis'],
    'dokumentasi': ['dokumentasi'],
    'projek-lain': ['projek'],
    'kategori-lain': ['lainnya']
  };

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    
    const projectCategory = project.kategori?.toLowerCase() || '';
    const mappedCategories = categoryMapping[activeFilter]?.map(cat => cat.toLowerCase()) || [];
    
    console.log('Filtering:', {
      project: project.judul,
      projectCategory,
      activeFilter,
      mappedCategories,
      matches: mappedCategories.some(cat => projectCategory.includes(cat))
    });
    
    return mappedCategories.some(cat => projectCategory.includes(cat));
  });

  const renderProject = (project) => {
    console.log('Rendering project:', {
      judul: project.judul,
      kategori: project.kategori
    });

    if (project.kategori.toLowerCase().includes('design') || 
        project.kategori.toLowerCase().includes('visual')) {
      return <DesignLayout project={project} />
    } else if (project.kategori.toLowerCase().includes('website')) {
      return <WebsiteLayout project={project} />
    } else if (project.kategori.toLowerCase().includes('sistem') || 
               project.kategori.toLowerCase().includes('analysis')) {
      return <AnalysisLayout project={project} />
    }
    
    return <DesignLayout project={project} />
  }

  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'ui-ux', label: 'UI/UX Design' },
    { id: 'visual', label: 'Visual Design' },
    { id: 'website', label: 'Website' },
    { id: 'system', label: 'System Analysis' },
    { id: 'business', label: 'Business Analysis' },
    { id: 'dokumentasi', label: 'Dokumentasi' },
    { id: 'projek-lain', label: 'Projek Lain' },
    { id: 'kategori-lain', label: 'Kategori Lain' }
  ]

  if (loading) return <LoadingSpinner />

  return (
    <section className="portofolio-section">
      <div className="container">
        {console.log('Jumlah proyek terfilter:', filteredProjects.length)}
        
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

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-item">
              {console.log('Rendering project:', project.judul)}
              {renderProject(project)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portofolio 