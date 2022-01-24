import { LaboratoryData } from '../../entities/laboratory-data'
export interface LaboratoryRepository {
    // Aqui atribuimos a tipagem LaboratoryData para o Laboratorio criado respeitar essa interface
    create: (laboratory: LaboratoryData) => Promise<void>;
    findAll: () => Promise<any>;
    findAndUpdate: (id: number, laboratoryData: LaboratoryData) => Promise<void>;
    remove: (id: number) => Promise<void>

}
