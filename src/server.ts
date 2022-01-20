import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Tiaozinho' })
})

app.listen(3000)
