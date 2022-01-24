import { SqLiteRepository } from '../repositories/sqlite-exam-repository'
import { RemoveExamController } from '../../application/controllers/exam/remove-exam-controller'
import { RemoveExamUseCase } from '../../useCases/exam/remove-exam-usecase'

const sqliteRespository = new SqLiteRepository()
const removeExamUseCase = new RemoveExamUseCase(sqliteRespository)
const removeExamController = new RemoveExamController(removeExamUseCase)
export { removeExamController }
