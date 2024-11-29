import { useState, useEffect } from 'react'
import supabase from '../config/supabaseClient'
import LoadingSpinner from '../components/LoadingSpinner'
import PortofolioDetail from './PortofolioDetail'
import Pagination from '../components/Pagination'
import { usePageTransition } from '../hooks/usePagination'
import './Portofolio.css'
import { 
  useFilter, 
  CATEGORIES, 
  CATEGORY_COLORS,
  getToolStyle, 
  fetchToolCategories 
} from '../constants/categories';

function Portofolio() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false);
  const [toolsWithCategories, setToolsWithCategories] = useState({});

  const { 
    activeFilter, 
    setActiveFilter, 
    filteredItems, 
    getCategoryStyle, 
    categories,
    isTransitioning 
  } = useFilter(projects)
  
  const { 
    currentPage, 
    setCurrentPage, 
    currentItems: currentProjects, 
    pageSize 
  } = usePageTransition(filteredItems)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch projects, categories, dan tools secara parallel
        const [projectsResponse, toolsData] = await Promise.all([
          supabase
            .from('portofolios')
            .select('*, images(id, url_gambar, tipe)')
            .order('waktu_publish', { ascending: false }),
          fetchToolCategories() // Fetch tools dari categories.js
        ]);

        if (projectsResponse.error) throw projectsResponse.error;
        
        setProjects(projectsResponse.data);
        setToolsWithCategories(toolsData);
      } catch (err) {
        setError('Terjadi kesalahan saat mengambil data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth <= 768
      )
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleDetailClick = (project, e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  const handleImageClick = (project, e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  if (loading) return <LoadingSpinner />
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>

  return (
    <div className="portofolio-container min-h-screen px-4 py-8 md:pt-32 pt-24 bg-gradient-to-br from-orange-50 to-white relative">
      {/* Elemen dekoratif dengan warna kontras */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-400/20 rounded-xl rotate-12"></div>
      <div className="absolute top-40 -left-10 w-72 h-72 bg-orange-400/20 rounded-xl -rotate-12"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-400/20 rounded-xl rotate-45"></div>
      
      {/* Content */}
      <div className="mx-auto max-w-7xl relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          Portofolio
        </h1>
        
        {/* Filter buttons dengan border dan warna variatif */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium 
                transition-all duration-300 
                border-2 hover:shadow-md
                ${activeFilter === category 
                  ? 'border-transparent' 
                  : 'border-gray-200 hover:border-gray-300'
                }
              `}
              style={{
                ...getCategoryStyle(category),
                transform: activeFilter === category ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${
          isTransitioning ? 'opacity-50' : 'opacity-100'
        } transition-opacity duration-150`}>
          {currentProjects.map(project => (
            <div 
              key={project.id} 
              className="project-card"
            >
              {/* Thumbnail */}
              <div 
                className="thumbnail-container cursor-pointer"
                onClick={(e) => handleImageClick(project, e)}
              >
                {project.images?.find(img => img.tipe === 'thumbnail') ? (
                  <img 
                    src={project.images.find(img => img.tipe === 'thumbnail').url_gambar}
                    alt={project.judul}
                    className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                    <span className="text-4xl">🖼️</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="project-content p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{project.judul}</h3>
                <p className="text-gray-600 mb-3 line-clamp-5 text-sm leading-relaxed">
                  {project.deskripsi}
                </p>
                
                {/* Tools */}
                <div className="tools-container mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tools?.slice(0, 4).map((tool, index) => (
                      <span 
                        key={index} 
                        className="tool-tag"
                        style={getToolStyle(tool)}
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools?.length > 4 && (
                      <button
                        onClick={(e) => handleDetailClick(project, e)}
                        className="tool-tag-more"
                        style={{
                          backgroundColor: `${CATEGORY_COLORS[project.kategori]?.bg}20` || '#f8f9fa',
                          color: CATEGORY_COLORS[project.kategori]?.bg || '#374151'
                        }}
                      >
                        +{project.tools.length - 4} more
                      </button>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="project-buttons mt-auto">
                  <div className="flex gap-2 justify-end">
                    {project.tautan && (
                      <a 
                        href={project.tautan}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-demo-btn flex items-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                    <button 
                      onClick={(e) => handleDetailClick(project, e)}
                      className="detail-btn flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                      </svg>
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination 
          currentPage={currentPage}
          totalCount={filteredItems.length}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
        />

        {selectedProject && (
          <PortofolioDetail 
            project={selectedProject} 
            onClose={() => {
              setSelectedProject(null)
              document.body.style.overflow = 'auto'
            }} 
          />
        )}
      </div>
    </div>
  )
}

export default Portofolio 