import { CreateLaboratoryController } from '../../application/controllers/create-laboratory-controller'
import { SqLiteRepository } from '../../infra/repositories/sqlite-repository'
import { CreateLaboratoryUseCase } from './create-laboratory-usecase'

const sqliteRespository = new SqLiteRepository()

const createLaboratoryUseCase = new CreateLaboratoryUseCase(sqliteRespository)

const createLaboratoryController = new CreateLaboratoryController(createLaboratoryUseCase)

export { createLaboratoryUseCase, createLaboratoryController }
