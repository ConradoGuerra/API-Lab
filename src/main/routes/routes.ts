import { Router } from 'express'

import { createLaboratoryController } from '../factories/create-laboratory'
import { getLaboratoryController } from '../factories/get-laboratory'
import { findAndUpdateLaboratoryController } from '../factories/find-and-update-laboratory'
import { removeLaboratoryController } from '../factories/remove-laboratory'

import { createExamController } from '../factories/create-exam'
import { getExamController } from '../factories/get-exam'
import { findAndUpdateExamController } from '../factories/find-and-update-exam'

const router = Router()

router.post('/laboratory/', (request, response) => {
  return createLaboratoryController.handle(request, response)
})

router.get('/laboratory/', (request, response) => {
  return getLaboratoryController.handle(request, response)
})

router.get('/laboratory/:labId', (request, response) => {
  return findAndUpdateLaboratoryController.handle(request, response)
})

router.delete('/laboratory/:labId', (request, response) => {
  return removeLaboratoryController.remove(request, response)
})

router.post('/exam/createExam', (request, response) => {
  return createExamController.handle(request, response)
})

router.get('/exam/', (request, response) => {
  return getExamController.handle(request, response)
})

router.get('/exam/:examId', (request, response) => {
  return findAndUpdateExamController.handle(request, response)
})

export { router }
