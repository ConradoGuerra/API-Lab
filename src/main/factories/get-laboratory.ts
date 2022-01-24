import { SqLiteRepository } from '../../main/repositories/sqlite-repository'
import { GetLaboratoryController } from '../../application/controllers/get-laboratory-controller'
import { GetLaboratoryUseCase } from '../../useCases/laboratory/get-laboratory-usecase'

const sqliteRespository = new SqLiteRepository()
const getLaboratoryUseCase = new GetLaboratoryUseCase(sqliteRespository)
const getLaboratoryController = new GetLaboratoryController(getLaboratoryUseCase)
export { getLaboratoryController }
