import { ExamRepository } from '../ports/exam-repository'

export class BulkCreateExamUseCase {
    private readonly examRepository: ExamRepository
    constructor (
      databaseRepository: ExamRepository
    ) {
      this.examRepository = databaseRepository
    }

    async bulkCreate (examData: []): Promise<void> {
      await this.examRepository.bulkCreate(examData)
    }
}
