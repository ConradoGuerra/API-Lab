// import { LaboratoryData } from 'src/entities/laboratoryData'
import { LaboratoryRepository } from 'src/useCases/ports/laboratory-repository'
import { LaboratoryData } from 'src/entities/laboratoryData'

export class SqLiteRepository implements LaboratoryRepository {
    private labs:(any)[] = []
    async create (labData: LaboratoryData): Promise<void> {
      this.labs.push(labData)

      console.log(this.labs)
    }
}
