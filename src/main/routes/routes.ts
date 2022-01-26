import { Router } from 'express'

import { createLaboratoryController } from '../factories/create-laboratory'
import { getLaboratoryController } from '../factories/get-laboratory'
import { findAndUpdateLaboratoryController } from '../factories/find-and-update-laboratory'
import { removeLaboratoryController } from '../factories/remove-laboratory'

import { getLaboratoriesByExamNameController } from '../factories/get-labs-by-exam-name'

import { createExamController } from '../factories/create-exam'
import { getExamController } from '../factories/get-exam'
import { findAndUpdateExamController } from '../factories/find-and-update-exam'
import { removeExamController } from '../factories/remove-exam'

import { bulkCreateLaboratoryController } from '../factories/bulk-create-laboratory'
import { bulkUpdateLaboratoryController } from '../factories/bulk-update-laboratory'
import { bulkCreateExamController } from '../factories/bulk-create-exam'

const router = Router()

router.post('/laboratory/', (request, response) => {
  return createLaboratoryController.handle(request, response)
})

router.get('/laboratory/', (request, response) => {
  return getLaboratoryController.handle(request, response)
})

router.patch('/laboratory/:labId', (request, response) => {
  return findAndUpdateLaboratoryController.handle(request, response)
})

router.delete('/laboratory/:labId', (request, response) => {
  return removeLaboratoryController.remove(request, response)
})

router.get('/examName/:examName', (request, response) => {
  return getLaboratoriesByExamNameController.handle(request, response)
})

router.post('/exam/', (request, response) => {
  return createExamController.handle(request, response)
})

router.get('/exam/', (request, response) => {
  return getExamController.handle(request, response)
})

router.patch('/exam/:examId', (request, response) => {
  return findAndUpdateExamController.handle(request, response)
})

router.delete('/exam/:examId', (request, response) => {
  return removeExamController.remove(request, response)
})

router.post('/bulkLaboratory/', (request, response) => {
  return bulkCreateLaboratoryController.handle(request, response)
})

router.patch('/bulkLaboratory/:labName', (request, response) => {
  return bulkUpdateLaboratoryController.handle(request, response)
})

router.post('/bulkExam/', (request, response) => {
  return bulkCreateExamController.handle(request, response)
})

export { router }
