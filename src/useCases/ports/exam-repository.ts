import { ExamData } from '../../entities/exam-data'

export interface ExamRepository {
    // Aqui atribuimos a tipagem LaboratoryData para o Laboratorio criado respeitar essa interface
    create: (exam: ExamData) => Promise<void>;
    findAll: () => Promise<any>;
    findAndUpdate: (id: number, examData: ExamData) => Promise<void>;
    remove: (id: number) => Promise<void>;

}
