import { SqLiteRepository } from '../repositories/sqlite-laboratory-repository'
import { BulkUpdateLaboratoryController } from '../../application/controllers/laboratory/bulk-update-laboratory-controller'
import { BulkUpdateLaboratoryUseCase } from '../../useCases/laboratory/bulk-update-laboratory-usecase'

const sqliteRespository = new SqLiteRepository()
const bulkUpdateLaboratoryUseCase = new BulkUpdateLaboratoryUseCase(sqliteRespository)
const bulkUpdateLaboratoryController = new BulkUpdateLaboratoryController(bulkUpdateLaboratoryUseCase)
export { bulkUpdateLaboratoryController }
