// import { Laboratory } from '../../entities/laboratory'
// import { LaboratoryData } from 'src/entities/laboratoryData'

export interface LaboratoryRepository {
    create: (name: string, address: string, status: number) => Promise<void>
    // getAll: () => Promise<Laboratory[]>,
    // update: (id: number) => Promise<Laboratory>,
    // remove: (id: number) => Promise<void>

}
