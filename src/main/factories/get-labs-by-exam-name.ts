import { SqLiteRepository } from '../repositories/sqlite-laboratory-repository'
import { GetLaboratoriesByExamNameController } from '../../application/controllers/laboratory/get-labs-by-exam-name-controller'
import { GetLaboratoriesByExamNameUseCase } from '../../useCases/laboratory/get-labs-by-exam-name-usecase'

const sqliteRespository = new SqLiteRepository()
const getLaboratoriesByExamNameUseCase = new GetLaboratoriesByExamNameUseCase(sqliteRespository)
const getLaboratoriesByExamNameController = new GetLaboratoriesByExamNameController(getLaboratoriesByExamNameUseCase)
export { getLaboratoriesByExamNameController }
