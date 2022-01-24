import { SqLiteRepository } from '../repositories/sqlite-laboratory-repository'
import { GetLaboratoryController } from '../../application/controllers/laboratory/get-laboratory-controller'
import { GetLaboratoryUseCase } from '../../useCases/laboratory/get-laboratory-usecase'

const sqliteRespository = new SqLiteRepository()
const getLaboratoryUseCase = new GetLaboratoryUseCase(sqliteRespository)
const getLaboratoryController = new GetLaboratoryController(getLaboratoryUseCase)
export { getLaboratoryController }
