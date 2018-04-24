const express = require('express')
const next = require('next')
//const graphql = require('./api/graphql')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 2000
const host = process.env.IP
const app = next({ dev })
const handle = app.getRequestHandler()

const api = express()
//api.use('/graphql', graphql)

app.prepare()
.then(() => {
  const server = express()
  server.use(express.static(__dirname + '/static'))

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:'+port)
    console.log(`Site rodando em : ${host}: ${port}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
