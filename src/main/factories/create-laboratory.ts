import { CreateLaboratoryController } from '../../application/controllers/create-laboratory-controller'
import { SqLiteRepository } from '../../main/repositories/sqlite-repository'
import { CreateLaboratoryUseCase } from '../../useCases/laboratory/create-laboratory-usecase'

const sqliteRespository = new SqLiteRepository()
const createLaboratoryUseCase = new CreateLaboratoryUseCase(sqliteRespository)
const createLaboratoryController = new CreateLaboratoryController(createLaboratoryUseCase)
export { createLaboratoryController }
