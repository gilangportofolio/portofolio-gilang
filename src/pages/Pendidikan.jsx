import { useState, useEffect } from 'react'
import supabase from '../config/supabaseClient'
import { AcademicCapIcon } from '@heroicons/react/24/solid'
import '../styles/Pendidikan.css'

const Pendidikan = () => {
  const [educations, setEducations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const { data, error } = await supabase
          .from('pendidikan')
          .select(`
            *,
            pendidikan_detail (
              id,
              poin,
              penjelasan,
              urutan
            )
          `)
          .order('tahun_masuk', { ascending: false })

        if (error) throw error

        const sortedData = data.map(edu => ({
          ...edu,
          pendidikan_detail: edu.pendidikan_detail.sort((a, b) => a.urutan - b.urutan)
        }))

        setEducations(sortedData)
      } catch (error) {
        console.error('Error:', error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchEducations()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <section className="relative py-20 px-4 mt-16">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full translate-x-1/4 -translate-y-1/4 opacity-50 -z-50"></div>
      
      <div className="max-w-6xl mx-auto education-timeline">
        <div className="timeline-line"></div>
        
        {educations.map((edu, index) => (
          <div key={edu.id} className="education-card animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="timeline-dot">
              <AcademicCapIcon className="w-6 h-6 text-orange-500" />
            </div>
            
            <div className="education-header">
              <div className="education-title-container">
                <div>
                  <h3 className="education-title">
                    {edu.nama}
                    <span className="text-gray-600 font-normal">, {edu.lokasi}</span>
                  </h3>
                  {edu.jurusan && (
                    <p className="education-subtitle">{edu.jurusan}</p>
                  )}
                </div>
              </div>
              <span className="education-year">
                {edu.tahun_masuk} - {edu.tahun_keluar || 'Sekarang'}
              </span>
            </div>

            {edu.deskripsi && (
              <p className="education-description">{edu.deskripsi}</p>
            )}

            {edu.pendidikan_detail && edu.pendidikan_detail.length > 0 && (
              <div className="points-list">
                {edu.pendidikan_detail.map((detail) => (
                  <div key={detail.id} className="point-item">
                    <div className="point-bullet"></div>
                    <div>
                      <h4 className="point-title text-justify">
                        {detail.poin}
                      </h4>
                      {detail.penjelasan && (
                        <p className="point-description text-justify">
                          {detail.penjelasan}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pendidikan 