import { ExamData } from '../../entities/exam-data'

export interface ExamRepository {
    create: (exam: ExamData) => Promise<void>;
    findAll: () => Promise<any>;
    findAndUpdate: (id: number, examData: ExamData) => Promise<void>;
    remove: (id: number) => Promise<void>;
    bulkCreate: (exams: []) => Promise<[]>;

}
