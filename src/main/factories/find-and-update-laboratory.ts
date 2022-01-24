import { SqLiteRepository } from '../../main/repositories/sqlite-repository'
import { FindAndUpdateLaboratoryUseCase } from '../../useCases/laboratory/find-and-update-laboratory-usecase'
import { FindAndUpdateLaboratoryController } from '../../application/controllers/find-and-update-laboratory-controller'

const sqliteRespository = new SqLiteRepository()
const findAndUpdateLaboratoryUseCase = new FindAndUpdateLaboratoryUseCase(sqliteRespository)
const findAndUpdateLaboratoryController = new FindAndUpdateLaboratoryController(findAndUpdateLaboratoryUseCase)
export { findAndUpdateLaboratoryController }
