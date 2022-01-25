import { LaboratoryRepository } from '../ports/laboratory-repository'
import { LaboratoryData } from '../../entities/laboratory-data'

export class BulkUpdateLaboratoryUseCase {
    private readonly laboratoryRepository: LaboratoryRepository
    constructor (
      databaseRepository: LaboratoryRepository
    ) {
      this.laboratoryRepository = databaseRepository
    }

    async bulkUpdate (labName: string, labData: LaboratoryData): Promise<void> {
      await this.laboratoryRepository.bulkUpdate(labName, labData)
    }
}
