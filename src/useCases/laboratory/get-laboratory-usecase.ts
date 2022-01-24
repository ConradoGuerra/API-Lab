import { LaboratoryData } from '../../entities/laboratory-data'
import { LaboratoryRepository } from '../ports/laboratory-repository'

export class GetLaboratoryUseCase {
    private databaseRepository: LaboratoryRepository
    constructor (
      databaseRepository: LaboratoryRepository
    ) {
      this.databaseRepository = databaseRepository
    }

    async execute (): Promise<LaboratoryData[]> {
      const activeLabs = await this.databaseRepository.findAll()

      if (activeLabs.length === 0) {
        throw new Error("Laboratories don't exist!")
      }

      return activeLabs
    }
}
