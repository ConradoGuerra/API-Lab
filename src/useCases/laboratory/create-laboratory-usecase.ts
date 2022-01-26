import { LaboratoryRepository } from '../ports/laboratory-repository'
import { LaboratoryData } from '../../entities/laboratory-data'
import { Laboratory } from '../../entities/laboratory'
export class CreateLaboratoryUseCase {
    private readonly laboratoryRepository: LaboratoryRepository
    constructor (
      databaseRepository: LaboratoryRepository
    ) {
      this.laboratoryRepository = databaseRepository
    }

    async create (labData: LaboratoryData): Promise<void> {
      const laboratory = new Laboratory()
      const createdLab = await laboratory.create(labData)
      return await this.laboratoryRepository.create(createdLab)
    }
}
