// import { LaboratoryData } from 'src/entities/laboratoryData'
import { LaboratoryRepository } from 'src/useCases/ports/laboratory-repository'

export class SqLiteRepository implements LaboratoryRepository {
    private labs:(string | number)[] = []
    async create (name: string, address: string, status: number): Promise<void> {
      this.labs.push(name, address, status)

      console.log(this.labs)
    }
}
