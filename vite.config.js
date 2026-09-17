import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)

  return {
    plugins: [
      react(),
      {
        name: 'api-contact-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/contact' && req.method === 'POST') {
              const freshEnv = loadEnv(mode, process.cwd(), '')
              Object.assign(process.env, freshEnv)

              let bodyStr = ''
              req.on('data', chunk => { bodyStr += chunk })
              req.on('end', async () => {
                try {
                  req.body = bodyStr ? JSON.parse(bodyStr) : {}
                } catch (e) {
                  req.body = {}
                }

                res.status = (code) => {
                  res.statusCode = code
                  return {
                    json: (data) => {
                      res.setHeader('Content-Type', 'application/json')
                      res.end(JSON.stringify(data))
                    }
                  }
                }

                try {
                  const contactHandler = (await import('./api/contact.js')).default
                  await contactHandler(req, res)
                } catch (err) {
                  console.error('[DEV API ERROR]', err)
                  res.statusCode = 500
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({ error: 'Server error processing request.' }))
                }
              })
              return
            }
            next()
          })
        }
      }
    ],
  }
})

