import { LaboratoryData } from '../../entities/laboratory-data'
import { Laboratory } from '../../entities/laboratory'
import { LaboratoryRepository } from '../ports/laboratory-repository'

export class FindAndUpdateLaboratoryUseCase {
    // Criando um repositório do banco para buscar a função requerida para o usecase
    private databaseRepository: LaboratoryRepository
    constructor (
      databaseRepository: LaboratoryRepository
    ) {
      this.databaseRepository = databaseRepository
    }

    async execute (laboratoryId: any, laboratoryData: LaboratoryData): Promise<LaboratoryData> {
      const laboratory = new Laboratory()
      let updatedLaboratory:any = await laboratory.create(laboratoryData)
      updatedLaboratory = await this.databaseRepository.findAndUpdate(laboratoryId, updatedLaboratory)

      if (!updatedLaboratory) {
        throw new Error("Laboratory doesn't exist!")
      }

      return updatedLaboratory
    }
}
