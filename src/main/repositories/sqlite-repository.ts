
// import { LaboratoryRepository } from '../../useCases/ports/laboratory-repository'
import { LaboratoryData } from '../../entities/laboratory-data'
import { Laboratory } from './models/laboratory-model'
export class SqLiteRepository {
  async create (labData: LaboratoryData): Promise<void> {
    await Laboratory.create(labData)
  }

  async findAll (): Promise<any> {
    const laboratoriesFound = await Laboratory.findAll({
      where: {
        status: 1
      }
    })
    return laboratoriesFound
  }
}
