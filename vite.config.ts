import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function staticPages(): Plugin {
  return {
    name: 'static-pages',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url && /^\/(privacy|terms)\/?$/.test(req.url)) {
          req.url = req.url.replace(/\/?$/, '/index.html')
        }
        next()
      })
    },
  }
}

export default defineConfig({
  appType: 'mpa',
  plugins: [staticPages(), react(), tailwindcss()],
})
