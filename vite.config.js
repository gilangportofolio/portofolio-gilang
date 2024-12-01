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
    cache: false,
    clean: true,
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
    headers: {
      "Content-Security-Policy": `
        default-src 'self'; 
        script-src 'self' 'unsafe-inline' 'unsafe-eval'; 
        style-src 'self' 'unsafe-inline' https: data:; 
        font-src 'self' https: data:; 
        img-src * data: blob: https: 'self'; 
        connect-src * 'self' https: wss: data: blob:; 
        frame-src * 'self' https:; 
        media-src * 'self' https: data: blob:;
      `.replace(/\s+/g, ' ').trim(),
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Resource-Policy": "cross-origin",
      "Referrer-Policy": "no-referrer",
      "Set-Cookie": "SameSite=Strict; Secure",
      "Cross-Origin-Resource-Policy": "same-site",
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups"
    },
    proxy: {
      '/gdrive': {
        target: 'https://drive.google.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gdrive/, '')
      }
    }
  },
})
