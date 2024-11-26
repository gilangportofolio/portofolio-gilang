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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {educations.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-8 hover:shadow-xl transition-shadow"
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
                  <p className="text-orange-500 font-semibold">
                    {edu.jurusan}
                  </p>
                  <div className="flex items-center gap-2 mt-2 md:mt-0">
                    <p className="text-gray-600 font-medium">
                      {edu.tahun_masuk} - {edu.tahun_keluar || 'Sekarang'}
                    </p>
                    <span className="text-gray-400 font-medium">•</span>
                    <p className="text-gray-600">
                      {edu.lokasi}
                    </p>
                  </div>
                </div>
                {edu.deskripsi && (
                  <p className="text-gray-700 mt-4 text-center md:text-left">{edu.deskripsi}</p>
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
                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">
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
  )
}

export default Pendidikan 