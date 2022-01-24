import { LaboratoryRepository } from '../ports/laboratory-repository'

export class GetLaboratoriesByExamNameUseCase {
    private databaseRepository: LaboratoryRepository
    constructor (databaseRepository: LaboratoryRepository) {
      this.databaseRepository = databaseRepository
    }

    async execute (examName: string): Promise<void> {
      const laboratories: any = await this.databaseRepository.findByExamName(examName)
      return laboratories
    }
}
