import { SqLiteRepository } from '../repositories/sqlite-exam-repository'
import { GetExamUseCase } from '../../useCases/exam/get-exam-usecase'
import { GetExamController } from '../../application/controllers/exam/get-exam-controller'

const sqliteRespository = new SqLiteRepository()
const getExamUseCase = new GetExamUseCase(sqliteRespository)
const getExamController = new GetExamController(getExamUseCase)
export { getExamController }
