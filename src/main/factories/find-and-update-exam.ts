import { SqLiteRepository } from '../repositories/sqlite-exam-repository'
import { FindAndUpdateExamController } from '../../application/controllers/exam/find-and-update-exam-controller'
import { FindAndUpdateExamUseCase } from '../../useCases/exam/find-and-update-exam-usecase'

const sqliteRespository = new SqLiteRepository()
const findAndUpdateexamUseCase = new FindAndUpdateExamUseCase(sqliteRespository)
const findAndUpdateExamController = new FindAndUpdateExamController(findAndUpdateexamUseCase)
export { findAndUpdateExamController }
