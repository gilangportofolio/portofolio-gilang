import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), visualizer({
    open: true,
    filename: 'dist/stats.html',
    gzipSize: true,
    brotliSize: true,
  })],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          
          // UI & Icons
          'vendor-ui': [
            '@headlessui/react', 
            '@heroicons/react',
            'react-icons',
            '@fortawesome/react-fontawesome',
            '@fortawesome/free-solid-svg-icons'
          ],
          
          // Animation & Interactive features
          'vendor-animation': [
            'framer-motion',
            'react-type-animation',
            'react-medium-image-zoom',
            'react-zoom-pan-pinch'
          ],

          // Data & Utils
          'vendor-utils': [
            '@supabase/supabase-js',
            'react-virtualized'
          ]
        }
      }
    }
  },
  server: {
    host: true,
    open: true,
    watch: {
      usePolling: true,
    },
    historyApiFallback: true,
  },
})
