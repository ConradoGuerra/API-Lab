import { LaboratoryData } from '../../entities/laboratory-data'
export interface LaboratoryRepository {
    // Aqui atribuimos a tipagem LaboratoryData para o Laboratorio criado respeitar essa interface
    create: (laboratory: LaboratoryData) => Promise<void>;
    findAll: () => Promise<any>;
    // update: (id: number) => Promise<Laboratory>,
    // remove: (id: number) => Promise<void>

}
