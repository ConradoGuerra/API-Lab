import { ExamData } from '../../entities/exam-data'
import { ExamRepository } from '../ports/exam-repository'
import { Exam } from '../../entities/exam'

export class CreateExamUseCase {
    private readonly examRepository: ExamRepository
    constructor (
      databaseRepository: ExamRepository
    ) {
      this.examRepository = databaseRepository
    }

    async create (ExamData: ExamData): Promise<void> {
      const exam = new Exam()
      const createdExam = await exam.create(ExamData)
      await this.examRepository.create(createdExam)
    }
}
