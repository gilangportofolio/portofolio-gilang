import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import supabase from '../config/supabaseClient'
import LoadingSpinner from '../components/LoadingSpinner'
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

  if (loading) return <LoadingSpinner />
  if (error) return <div>Error: {error}</div>

  return (
    <div className="pendidikan-container">
<section className="page-section">
 
      <div className="max-w-7xl mx-auto flex flex-col ">
        {educations.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 hover:shadow-xl transition-shadow"
            style={{ borderColor: 'var(--color-primary)', borderWidth: '1px' }}
          >
            <div className="flex flex-col items-center md:items-start">
              <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-0">
                <img
                  src={edu.logo_url}
                  alt={`Logo ${edu.nama}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  {edu.nama}
                </h3>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-1">
  <p 
    className="font-semibold text-center md:text-left"
    style={{ color: 'var(--color-primary)' }}
  >
                    {edu.jurusan}
                  </p>
  <div className="flex justify-center md:justify-end mt-2 md:mt-0">
    <p 
      className="text-center"
      style={{ 
        color: 'white',
        backgroundColor: 'var(--color-primary)',
        padding: '2px 10px',
        borderRadius: '20px',
        whiteSpace: 'nowrap',
        maxWidth: '200px',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}
    >
      {edu.tahun_masuk} - {edu.tahun_keluar || 'Sekarang'}, {edu.lokasi}
    </p>
  </div>
                </div>
                {edu.deskripsi && (
                  <p className="font-gray-900 mt-4 text-justify md:text-justify">{edu.deskripsi}</p>
                )}

                {edu.pendidikan_detail && edu.pendidikan_detail.length > 0 && (
                  <div className="space-y-3 mt-4">
                    {edu.pendidikan_detail.map((detail) => (
                      <motion.div
                        key={detail.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-3 items-start"
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0" 
                          style={{ backgroundColor: 'var(--color-primary)' }}
                        />
                        <div>
                          <p className="font-medium text-justify text-gray-800">
                            {detail.poin}
                          </p>
                          {detail.penjelasan && (
                            <p className="text-gray-600 text-justify mt-1">
                              {detail.penjelasan}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Pendidikan 