import { useState, useEffect } from 'react'
import supabase from '../config/supabaseClient'
import '../styles/Pengalaman.css'
import LoadingSpinner from '../components/LoadingSpinner'

const Pengalaman = () => {
  const [experiences, setExperiences] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

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

  const getStatusClass = (status) => {
    if (!status) return 'status-fulltime';
    
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
        return 'status-fulltime';
    }
  };

  const filteredExperiences = experiences.filter(exp => {
    if (activeFilter === 'all') return true;
    
    const normalizedStatus = exp.status?.toLowerCase().replace(/\s+/g, '');
    const normalizedFilter = activeFilter.toLowerCase().replace(/\s+/g, '');
    
    return normalizedStatus === normalizedFilter;
  });

  if (loading) return <LoadingSpinner />
  if (error) return <div>Error: {error}</div>

  return (
    <section className="page-section pt-40">
      <div className="container-pengalaman">
        {/* Filter Buttons Container */}
        <div className="filter-container sticky top-[80px] z-10">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
          >
            Semua
          </button>
          <button 
            onClick={() => setActiveFilter('fulltime')}
            data-filter="fulltime"
            className={`filter-button ${activeFilter === 'fulltime' ? 'active' : ''}`}
          >
            Full Time
          </button>
          <button 
            onClick={() => setActiveFilter('freelance')}
            data-filter="freelance"
            className={`filter-button ${activeFilter === 'freelance' ? 'active' : ''}`}
          >
            Freelance
          </button>
          <button 
            onClick={() => setActiveFilter('organisasi')}
            data-filter="organisasi"
            className={`filter-button ${activeFilter === 'organisasi' ? 'active' : ''}`}
          >
            Organisasi
          </button>
          <button 
            onClick={() => setActiveFilter('parttime')}
            data-filter="parttime"
            className={`filter-button ${activeFilter === 'parttime' ? 'active' : ''}`}
          >
            Part Time
          </button>
          <button 
            onClick={() => setActiveFilter('intern')}
            data-filter="intern"
            className={`filter-button ${activeFilter === 'intern' ? 'active' : ''}`}
          >
            Intern
          </button>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          {filteredExperiences.map((exp, index) => (
            <div key={index} className="experience-wrapper">
              <div className="experience-card">
                {/* Status Badge - hanya tampil jika filter 'all' */}
                {activeFilter === 'all' && (
                  <div className="status-container">
                    <span className={`status-badge ${getStatusClass(exp.status)}`}>
                      {exp?.status || 'Full Time'}
                    </span>
                  </div>
                )}

                {/* Logo dan Info Container */}
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

                {/* Experience Content dengan auto bullet */}
                <div className="experience-content">
                  {exp.detail && (
                    <p className="experience-detail">{exp.detail}</p>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pengalaman 
            