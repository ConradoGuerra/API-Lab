import { SqLiteRepository } from '../repositories/sqlite-laboratory-repository'
import { BulkCreateLaboratoryController } from '../../application/controllers/laboratory/bulk-create-laboratory-controller'
import { BulkCreateLaboratoryUseCase } from '../../useCases/laboratory/bulk-create-laboratory-usecase'

const sqliteRespository = new SqLiteRepository()
const bulkCreateLaboratoryUseCase = new BulkCreateLaboratoryUseCase(sqliteRespository)
const bulkCreateLaboratoryController = new BulkCreateLaboratoryController(bulkCreateLaboratoryUseCase)
export { bulkCreateLaboratoryController }
