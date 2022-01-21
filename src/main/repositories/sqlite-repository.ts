
import { LaboratoryRepository } from '../../useCases/ports/laboratory-repository'
import { LaboratoryData } from '../../entities/laboratory-data'
import { Laboratory } from './models/laboratory-model'
export class SqLiteRepository implements LaboratoryRepository {
  async create (labData: LaboratoryData): Promise<void> {
    await Laboratory.create(labData)
  }
}
