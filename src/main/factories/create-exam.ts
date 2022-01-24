import { CreateExamUseCase } from '../../useCases/exam/create-exam-usecase'
import { CreateExamController } from '../../application/controllers/exam/create-exam-controller'
import { SqLiteRepository } from '../repositories/sqlite-exam-repository'

const sqliteRespository = new SqLiteRepository()
const createExamUseCase = new CreateExamUseCase(sqliteRespository)
const createExamController = new CreateExamController(createExamUseCase)

export { createExamController }
