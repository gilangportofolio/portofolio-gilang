import { motion } from 'framer-motion'

function EmptyState() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center p-8 mt-8"
    >
      <div className="w-64 h-64 mb-6">
        <img 
          src="/startup-animation.svg" 
          alt="Startup Animation" 
          className="animated w-full h-full"
        />
      </div>

      <motion.h3
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-2xl font-bold text-gray-800 mb-3 text-center"
      >
        Sabar ya! 😊
      </motion.h3>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-600 text-center max-w-md"
      >
        Proyek-proyek keren sedang dalam proses pengumpulan.
        Nantikan update terbaru dari saya! 
      </motion.p>

      {/* Loading indicator */}
      <motion.div 
        className="flex gap-2 mt-6"
        animate={{ 
          scale: [1, 0.9, 1],
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity
        }}
      >
        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
        <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
        <span className="w-3 h-3 bg-orange-300 rounded-full"></span>
      </motion.div>
    </motion.div>
  )
}

export default EmptyState