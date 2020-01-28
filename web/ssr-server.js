const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
    
app.prepare()
.then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.get('/posts/:post', (req, res) => {
    const actualPage = `/posts/${req.params.post}`
    const mergedQuery = Object.assign({}, req.query, req.params);
    console.log(`req = ${mergedQuery}`)
    return app.render(req, res, actualPage, mergedQuery)
  })
  
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})

.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})