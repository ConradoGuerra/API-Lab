import { SqLiteRepository } from '../repositories/sqlite-exam-repository'
import { BulkCreateExamController } from '../../application/controllers/exam/bulk-create-exam-controller'
import { BulkCreateExamUseCase } from '../../useCases/exam/bulk-create-exam-usecase'

const sqliteRespository = new SqLiteRepository()
const bulkCreateExamUseCase = new BulkCreateExamUseCase(sqliteRespository)
const bulkCreateExamController = new BulkCreateExamController(bulkCreateExamUseCase)
export { bulkCreateExamController }
