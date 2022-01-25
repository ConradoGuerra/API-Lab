import { LaboratoryRepository } from '../ports/laboratory-repository'

export class BulkCreateLaboratoryUseCase {
    private readonly laboratoryRepository: LaboratoryRepository
    constructor (
      databaseRepository: LaboratoryRepository
    ) {
      this.laboratoryRepository = databaseRepository
    }

    async bulkCreate (labData: []): Promise<void> {
      await this.laboratoryRepository.bulkCreate(labData)
    }
}
