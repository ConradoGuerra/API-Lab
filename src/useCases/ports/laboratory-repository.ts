import { LaboratoryData } from 'src/entities/laboratoryData'

export interface LaboratoryRepository {
    // Aqui atribuimos a tipagem LaboratoryData para o Laboratorio criado respeitar essa interface
    create: (laboratory: LaboratoryData) => Promise<void>
    // getAll: () => Promise<Laboratory[]>,
    // update: (id: number) => Promise<Laboratory>,
    // remove: (id: number) => Promise<void>

}
