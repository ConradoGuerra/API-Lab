import { LaboratoryRepository } from '../ports/laboratory-repository'

export class RemoveLaboratoryUseCase {
    private databaseRepository: LaboratoryRepository
    constructor (
      databaseRepository: LaboratoryRepository
    ) {
      this.databaseRepository = databaseRepository
    }

    async remove (labId: any): Promise<void> {
      return await this.databaseRepository.remove(labId)
    }
}
