import { ExamData } from '../../entities/exam-data'
import { ExamRepository } from '../ports/exam-repository'

export class GetExamUseCase {
    private databaseRepository: ExamRepository
    constructor (
      databaseRepository: ExamRepository
    ) {
      this.databaseRepository = databaseRepository
    }

    async execute (): Promise<ExamData[]> {
      const activeExams = await this.databaseRepository.findAll()

      if (activeExams.length === 0) {
        throw new Error("Exams don't exist!")
      }

      return activeExams
    }
}
