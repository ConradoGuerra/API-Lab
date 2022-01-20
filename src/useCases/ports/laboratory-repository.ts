// import { Laboratory } from '../../entities/laboratory'
import { LaboratoryData } from 'src/entities/laboratoryData'

export interface LaboratoryRepository {
    create: (laboratoryData: LaboratoryData) => Promise<void>
    // getAll: () => Promise<Laboratory[]>,
    // update: (id: number) => Promise<Laboratory>,
    // remove: (id: number) => Promise<void>

}
