import { Router } from 'express'
import { createLaboratoryController } from '../factories/create-laboratory'
import { getLaboratoryController } from '../factories/get-laboratory'
import { findAndUpdateLaboratoryController } from '../factories/find-and-update-laboratory'

const router = Router()

router.post('/', (request, response) => {
  return createLaboratoryController.handle(request, response)
})

router.get('/', (request, response) => {
  return getLaboratoryController.handle(request, response)
})

router.get('/:labId', (request, response) => {
  return findAndUpdateLaboratoryController.handle(request, response)
})

export { router }
