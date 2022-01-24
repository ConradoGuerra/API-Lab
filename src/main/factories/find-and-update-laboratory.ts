import { SqLiteRepository } from '../repositories/sqlite-laboratory-repository'
import { FindAndUpdateLaboratoryUseCase } from '../../useCases/laboratory/find-and-update-laboratory-usecase'
import { FindAndUpdateLaboratoryController } from '../../application/controllers/laboratory/find-and-update-laboratory-controller'

const sqliteRespository = new SqLiteRepository()
const findAndUpdateLaboratoryUseCase = new FindAndUpdateLaboratoryUseCase(sqliteRespository)
const findAndUpdateLaboratoryController = new FindAndUpdateLaboratoryController(findAndUpdateLaboratoryUseCase)
export { findAndUpdateLaboratoryController }
