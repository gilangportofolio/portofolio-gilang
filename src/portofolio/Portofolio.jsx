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

import ExternalUrlHandler from '../utils/ExternalUrlHandler';
import EmptyState from '../components/EmptyState'
import { AiOutlineFilePdf } from 'react-icons/ai'

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
        const [projectsResponse, toolsData] = await Promise.all([
          supabase
            .from('portofolios')
            .select(`
              *,
              images(
                id, 
                url_gambar, 
                tipe,
                is_external,
                url_asli
              )
            `)
            .order('waktu_publish', { ascending: false }),
          fetchToolCategories()
        ]);
        if (projectsResponse.error) throw projectsResponse.error;
        const projectsWithImages = projectsResponse.data.map(project => {
          return project;
        });

        setProjects(projectsWithImages);
        setToolsWithCategories(toolsData);
      } catch (err) {
        setError('Terjadi kesalahan saat mengambil data');
        console.error('Fetch error:', err);
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

  const isPDF = (url) => {
    return url?.toLowerCase().endsWith('.pdf');
  };

  const getThumbnailUrl = (project) => {
    if (!project?.images?.length) return null;
    
    const thumbnailImage = project.images.find(img => img.tipe === 'thumbnail');
    const imageToUse = thumbnailImage || project.images[0];
    
    return imageToUse?.url_gambar;
  };

  const handleImageClick = (project, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  if (loading) return <LoadingSpinner />
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>

  return (
    <div className="portofolio-container min-h-screen px-4 py-8 pt-24 bg-gradient-to-br relative">
      {/* Content */}
      <div className="mx-auto max-w-7xl relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          Portofolio
        </h1>
        
        {/* Filter buttons dengan border tipis abu-abu */}
        <div className="flex overflow-hidden flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium 
                transition-all duration-300 
                border hover:shadow-md
                ${activeFilter === category 
                  ? 'border-transparent' 
                  : 'border-gray-300 hover:border-gray-400'
                }
              `}
              style={{
                ...getCategoryStyle(category),
                transform: activeFilter === category ? 'scale(1.05)' : 'scale(1)',
                borderWidth: '1px'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tambahkan kondisi untuk EmptyState */}
        {filteredItems.length === 0 ? (
  <EmptyState />
        ) : (
          /* Projects Grid */
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${
            isTransitioning ? 'opacity-50' : 'opacity-100'
          } transition-opacity duration-150`}>
            {currentProjects.map(project => (
              <div 
                key={project.id} 
                className="project-card bg-white/70 backdrop-blur-sm rounded-lg shadow-md overflow-hidden"
                style={{ borderColor: 'var(--color-primary)', borderWidth: '1px' }}
              >
                {/* Thumbnail */}
                <div 
                  className="thumbnail-container cursor-pointer relative group"
                  onClick={(e) => handleImageClick(project, e)}
                >
                  {project.images?.length > 0 ? (
                    <>
                      {isPDF(project.images[0].url_gambar) ? (
                        <div className="w-full h-48 bg-gray-100 flex flex-col items-center justify-center">
                          <AiOutlineFilePdf className="w-16 h-16 text-red-500" />
                          <span className="text-sm text-gray-600 mt-2">PDF Document</span>
                        </div>
                      ) : (
                        <img 
                          src={getThumbnailUrl(project)}
                          alt={project.judul}
                          className="w-full h-48 object-cover transition-all duration-300 group-hover:opacity-90"
                          loading="lazy"
                          onError={(e) => {
                            const firstImage = project.images[0];
                            if (firstImage?.is_external && firstImage?.url_gambar) {
                              const fileId = ExternalUrlHandler.googleDrive.extractFileId(firstImage.url_gambar);
                              if (fileId) {
                                e.target.src = `https://drive.google.com/thumbnail?id=${fileId}&sz=w500`;
                              }
                            }
                          }}
                        />
                      )}
                    </>
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
                          className="px-4 py-2 text-sm rounded-md transition-colors duration-300"
                          style={{ 
                            background: `rgba(255, 255, 255, 0.9)`,
                            color: `var(--color-primary)`,
                            border: `1px solid var(--color-primary)`,
                            backdropFilter: 'blur(5px)'
                          }}
                        >
                          Live Demo
                        </a>
                      )}
                      <button
                        onClick={(e) => handleImageClick(project, e)}
                        className="px-4 py-2 text-sm rounded-md transition-colors duration-300"
                        style={{ 
                          background: `rgba(255, 255, 255, 0.9)`,
                          color: `var(--color-primary)`,
                          border: `1px solid var(--color-primary)`,
                          backdropFilter: 'blur(5px)'
                        }}
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

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
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  )
}

export default Portofolio 