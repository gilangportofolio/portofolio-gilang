import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'
import postcssNesting from 'postcss-nesting'

export default {
  plugins: [
    postcssImport({
      path: ['src'],
      resolve: (id) => {
        if (id.startsWith('~')) {
          return id.slice(1)
        }
        return id
      }
    }),
    postcssNesting(),
    tailwindcss,
    autoprefixer
  ]
}
