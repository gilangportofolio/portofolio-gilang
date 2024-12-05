import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import compression from 'vite-plugin-compression'
import imagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), visualizer(), compression(), imagemin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React Core + UI
          'react-core': [
            'react',
            '@headlessui/react',
            '@heroicons/react'
          ],
          'react-dom': [
            'react-dom',
            'react-dom/client',
            'react-dom/server'
          ],
          'react-router': ['react-router-dom'],
          
          // Animation
          'animation-core': ['framer-motion'],
          'animation-type': ['react-type-animation'],
          'animation-zoom': [
            'react-medium-image-zoom',
            'react-zoom-pan-pinch'
          ],
          
          // Utils
          'utils': [
            'react-virtualized',
            './src/utils/analytics.js',
            './src/utils/ExternalUrlHandler.js',
            './src/utils/setupCSP.js'
          ],
          'utils-db': ['@supabase/supabase-js'],
          
          // PDF Viewer
          'pdf': ['react-pdf'],
          
          // Icons
          'icons': [
            '@fortawesome/react-fontawesome',
            '@fortawesome/free-solid-svg-icons',
            '@react-icons/all-files'
          ],
        },
        compact: true,
        generatedCode: {
          arrowFunctions: true,
          constBindings: true,
          objectShorthand: true
        }
      }
    },
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
        passes: 2,
        ecma: 2020
      },
      format: {
        comments: false,
        ecma: 2020
      },
      module: true,
      toplevel: true
    },
    cssCodeSplit: true,
    cssMinify: 'lightningcss',
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
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