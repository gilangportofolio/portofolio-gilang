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
    <section className="page-section">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full translate-x-1/4 -translate-y-1/4 opacity-50 -z-50"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-yellow-300 to-orange-300 rounded-full -translate-x-1/4 translate-y-1/4 opacity-50 -z-50"></div>
      
      {/* Main content wrapper */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Filter Buttons Container */}
        <div className="max-w-7xl mx-auto">
          <div className="filter-container mb-8">
            <button 
              onClick={() => setActiveFilter('all')}
              data-filter="all"
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
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          {filteredExperiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-gray-200 overflow-hidden">
                    {exp.logo_url ? (
                      <img 
                        src={exp.logo_url} 
                        alt={`Logo ${exp.perusahaan}`}
                        className="w-full h-full object-contain p-2"
                      />
                    ) : (
                      <div className="w-full h-full bg-teal-500 flex items-center justify-center text-white font-bold">
                        {exp.perusahaan.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{exp.perusahaan}</h3>
                    <p className="text-gray-600">{exp.posisi}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`status-badge ${getStatusClass(exp.status)}`}>
                    {exp?.status || 'Full Time'}
                  </span>
                  <span className="text-sm text-gray-500 mt-1">
                    {new Date(exp.mulai).toLocaleDateString('id-ID', { 
                      month: 'long', 
                      year: 'numeric' 
                    })} - {
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

              {exp.detail && (
                <p className="text-gray-700 mb-3">{exp.detail}</p>
              )}

              {exp.poin && exp.poin.length > 0 && (
                <ul className="space-y-2 ml-4">
                  {exp.poin.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span>•</span>
                      <p className="text-gray-600">{point}</p>
                    </li>
                  ))}
                </ul>
              )}

              {exp.keterangan && (
                <p className="text-sm text-gray-500 mt-3 italic">{exp.keterangan}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pengalaman 
            