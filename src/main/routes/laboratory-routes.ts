import { Router } from 'express'
import { createLaboratoryController } from '../factories/create-laboratory'

const router = Router()

router.post('/', (request, response) => {
  return createLaboratoryController.handle(request, response)
})

export { router }
