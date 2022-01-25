import { LaboratoryData } from '../../entities/laboratory-data'
export interface LaboratoryRepository {
    create: (laboratory: LaboratoryData) => Promise<void>;
    findAll: () => Promise<any>;
    findAndUpdate: (id: number, laboratoryData: LaboratoryData) => Promise<void>;
    remove: (id: number) => Promise<void>;
    findByExamName: (examName: string) => Promise<[]>;
    bulkCreate: (laboratories: []) => Promise<[]>;
    bulkUpdate: (labName: string, laboratories: any) => Promise<[]>;

}
