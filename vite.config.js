import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), visualizer({
    open: true,
    filename: 'dist/stats.html',
    gzipSize: true,
    brotliSize: true,
  }), compression({
    algorithm: 'gzip',
    ext: '.gz',
    threshold: 1024,
    deleteOriginFile: false
  })],
  build: {
    cache: false,
    clean: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          // React core
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          
          // UI & Icons - Pisahkan icons ke chunk terpisah
          'vendor-ui': ['@headlessui/react', '@heroicons/react'],
          
          // Icons chunks
          'vendor-icons': [
            'react-icons/fa',
            'react-icons/si', 
            'react-icons/ai',
            'react-icons/hi',
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
        },
        compact: true,
        generatedCode: {
          arrowFunctions: true,
          constBindings: true,
          objectShorthand: true
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      },
      format: {
        comments: false,
        semicolons: false
      },
      mangle: {
        safari10: true
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
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com; 
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
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
      "Cross-Origin-Resource-Policy": "same-site",
      "Referrer-Policy": "no-referrer",
      "Set-Cookie": "SameSite=Strict; Secure"
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