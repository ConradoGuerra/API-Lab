import { Router } from 'express'
import { createLaboratoryController } from '../factories/create-laboratory'
import { getLaboratoryController } from '../factories/get-laboratory'
import { findAndUpdateLaboratoryController } from '../factories/find-and-update-laboratory'
import { removeLaboratoryController } from '../factories/remove-laboratory'

import { createExamController } from '../factories/create-exam'

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

router.delete('/:labId', (request, response) => {
  return removeLaboratoryController.remove(request, response)
})

router.post('/createExam', (request, response) => {
  return createExamController.handle(request, response)
})

export { router }
