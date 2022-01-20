import { LaboratoryData } from 'src/entities/laboratoryData'
import { LaboratoryRepository } from 'src/useCases/ports/laboratory-repository'

export class SqlLiteRepository implements LaboratoryRepository {
    private labs: LaboratoryData[] = []
    async create (laboratory: LaboratoryData): Promise<void> {
      this.labs.push(laboratory)
    }
}
