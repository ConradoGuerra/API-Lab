// import { LaboratoryData } from 'src/entities/laboratoryData'
import { LaboratoryRepository } from 'src/useCases/ports/laboratory-repository'
import { LaboratoryData } from 'src/entities/laboratoryData'
import { Laboratory } from './models/Laboratory-model'
export class SqLiteRepository implements LaboratoryRepository {
  async create (labData: LaboratoryData): Promise<void> {
    await Laboratory.create(labData)
  }
}
