import { Router } from 'express'
import { createLaboratoryController } from '../../useCases/laboratory/index'
// import { CreateLaboratoryController } from '../create-laboratory-controller'

const router = Router()

router.post('/', (request, response) => {
  return createLaboratoryController.handle(request, response)
})

export { router }
