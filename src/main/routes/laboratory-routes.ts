import { Router } from 'express'
import { createLaboratoryController } from '../factories/create-laboratory'
import { getLaboratoryController } from '../factories/get-laboratory'

const router = Router()

router.post('/', (request, response) => {
  return createLaboratoryController.handle(request, response)
})

router.get('/', (request, response) => {
  return getLaboratoryController.handle(request, response)
})

export { router }
