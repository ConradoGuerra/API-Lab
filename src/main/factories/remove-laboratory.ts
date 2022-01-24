import { SqLiteRepository } from '../repositories/sqlite-laboratory-repository'
import { RemoveLaboratoryUseCase } from '../../useCases/laboratory/remove-laboratory-usecase'
import { RemoveLaboratoryController } from '../../application/controllers/laboratory/remove-laboratory-controller'

const sqliteRespository = new SqLiteRepository()
const removeLaboratoryUseCase = new RemoveLaboratoryUseCase(sqliteRespository)
const removeLaboratoryController = new RemoveLaboratoryController(removeLaboratoryUseCase)
export { removeLaboratoryController }
