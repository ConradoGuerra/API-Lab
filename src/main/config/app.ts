import express from 'express'
import { router } from '../routes/routes'

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use((error: any, req: any, res: any, next: any) => {
  const status = error.statusCode || 500
  const message = error.message
  const data = error.data
  res.status(status).json({ message: message, data: data })
})

app.use('/', (req, res, next) => {
  res.send('<h1>API de Laboratórios e Exames</h1>')
  next()
})
app.use(router)

export default app
