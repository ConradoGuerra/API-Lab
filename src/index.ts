import express from 'express'
import { router } from './application/routes/laboratory-routes'

const app = express()

app.use(express.json())

/* This middleware set headers to avoid CORS error, it allows browsers to access the data and use specific methods and headers
  Este middleware concede headers para evitar o erro CORS, ele permite que browsers acessem dados e permite o uso de métodos e headers específicos
*/
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use('/', router)

app.listen(2000, () => { console.log('Online carai') })
