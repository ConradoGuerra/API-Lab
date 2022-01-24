import { ExamRepository } from '../ports/exam-repository'

export class RemoveExamUseCase {
    private databaseRepository: ExamRepository
    constructor (
      databaseRepository: ExamRepository
    ) {
      this.databaseRepository = databaseRepository
    }

    async remove (examId: any): Promise<void> {
      return await this.databaseRepository.remove(examId)
    }
}
