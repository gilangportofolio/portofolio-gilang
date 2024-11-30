import { useState, useEffect } from 'react'
import supabase from '../config/supabaseClient'
import '../styles/Pengalaman.css'
import LoadingSpinner from '../components/LoadingSpinner'
import { useExperienceFilter } from '../constants/categories';

const Pengalaman = () => {
  const [experiences, setExperiences] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { 
    activeFilter, 
    setActiveFilter, 
    filteredItems: filteredExperiences, 
    getExperienceStyle,
    categories,
    isTransitioning 
  } = useExperienceFilter(experiences);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const { data, error } = await supabase
          .from('pekerjaan')
          .select('*')
          .order('mulai', { ascending: false })

        if (error) throw error
        setExperiences(data)
      } catch (error) {
        console.error('Error:', error)
        setError(error.message)
      } finally {
        setTimeout(() => setLoading(false), 500)
      }
    }

    fetchExperiences()
  }, [])

  if (loading) return <LoadingSpinner />
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>

  return (
    <div className="pengalaman-container min-h-screen px-4 py-8 md:pt-32 pt-24 bg-gradient-to-br from-orange-50 to-white relative">
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-400/20 rounded-xl rotate-12"></div>
      <div className="absolute top-40 -left-10 w-72 h-72 bg-orange-400/20 rounded-xl -rotate-12"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-400/20 rounded-xl rotate-45"></div>

      <div className="mx-auto max-w-7xl relative">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          Pengalaman
        </h1>
        <h2 className="text-gray-700 text-center mb-4 md:mb-8 text-sm md:text-base px-4">
          Berikut adalah pengalaman saya yang dimulai dari tahun 2012 - sekarang 
        </h2>
        <div className="filter-container sticky top-[80px] flex flex-wrap justify-center gap-2 mb-8">
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
                ...getExperienceStyle(category),
                transform: activeFilter === category ? 'scale(1.05)' : 'scale(1)',
                borderWidth: '1px'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="timeline-container space-y-4 md:space-y-6">
          {filteredExperiences.map((exp, index) => (
            <div key={index} className="experience-wrapper">
              <div className="experience-card">
                <span className={`status-badge ${getStatusClass(exp.status)}`}>
                  {exp?.status || 'Full Time'}
                </span>

                <div className="info-container">
                  <div className="company-logo">
                    {exp.logo_url ? (
                      <img 
                        src={exp.logo_url} 
                        alt={`Logo ${exp.perusahaan}`}
                        className="logo-image"
                      />
                    ) : (
                      <div className="logo-placeholder">
                        {exp.perusahaan.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div className="company-details">
                    <h3 className="company-name">{exp.perusahaan}</h3>
                    <p className="position-title">{exp.posisi}</p>
                    <div className="date-info">
                      <span className="date-text">
                        {new Date(exp.mulai).toLocaleDateString('id-ID', { 
                          month: 'long', 
                          year: 'numeric' 
                        })} — {
                          exp.akhir ? 
                          new Date(exp.akhir).toLocaleDateString('id-ID', { 
                            month: 'long', 
                            year: 'numeric' 
                          }) : 
                          'Sekarang'
                        }
                      </span>
                    </div>
                  </div>
                </div>

                <div className="experience-content">
                  {exp.detail && (
                    <p className="experience-detail">
                      {exp.detail}
                    </p>
                  )}

                  {exp.poin && exp.poin.length > 0 && (
                    <ul className="points-list">
                      {exp.poin.map((point, idx) => (
                        <li key={idx} className="point-item">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.keterangan && (
                    <p className="experience-note">
                      {exp.keterangan}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const getStatusClass = (status) => {
  if (!status) return 'status-Full-Time';
  
  const normalizedStatus = status.toLowerCase().replace(/\s+/g, '');
  
  switch (normalizedStatus) {
    case 'fulltime':
    case 'full-time':
    case 'full time':
      return 'status-Full-Time';
    case 'parttime':
    case 'part-time':
    case 'part time':
      return 'status-Part-Time';
    case 'freelance':
      return 'status-freelance';
    case 'organisasi':
      return 'status-organisasi';
    case 'intern':
    case 'internship':
    case 'magang':
      return 'status-intern';
    default:
      return 'status-Full-Time';
  }
};

export default Pengalaman 
            