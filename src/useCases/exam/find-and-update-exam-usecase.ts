import { ExamData } from '../../entities/exam-data'
import { ExamRepository } from '../ports/exam-repository'
import { Exam } from '../../entities/exam'
export class FindAndUpdateExamUseCase {
    // Criando um repositório do banco para buscar a função requerida para o usecase
    private databaseRepository: ExamRepository
    constructor (
      databaseRepository: ExamRepository
    ) {
      this.databaseRepository = databaseRepository
    }

    async execute (examId: any, ExamData: ExamData): Promise<ExamData> {
      const exam = new Exam()
      let updatedExam:any = await exam.create(ExamData)
      updatedExam = await this.databaseRepository.findAndUpdate(examId, updatedExam)

      if (!updatedExam) {
        throw new Error("Exam doesn't exist!")
      }

      return updatedExam
    }
}
