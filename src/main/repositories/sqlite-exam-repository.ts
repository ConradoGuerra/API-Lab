
import { ExamData } from '../../entities/exam-data'
import Exam from './models/exam-model'
import Laboratory from './models/laboratory-model'

export class SqLiteRepository {
  async create (examData: ExamData): Promise<void> {
    try {
      const laboratory = await Laboratory.findByPk(examData.laboratoryId)
      if (!laboratory) {
        throw new Error('Missing laboratory')
      }
      await Exam.create(examData)
    } catch (err: any) {
      throw new Error(err)
    }
  }

  async findAll (): Promise<any> {
    try {
      const examsFound = await Exam.findAll({
        where: {
          status: 1
        }
      })
      return examsFound
    } catch (err: any) {
      throw new Error(err)
    }
  }

  async findAndUpdate (examId: number, examData: ExamData): Promise<any> {
    try {
      const exam = await Exam.findByPk(examId)
      return await exam?.update(examData)
    } catch (err: any) {
      throw new Error(err)
    }
  }

  async remove (examId: number): Promise<any> {
    try {
      const deleteResult = await Exam.destroy({ where: { id: examId, status: 1 } })
      if (deleteResult) {
        return true
      }
      return false
    } catch (err: any) {
      throw new Error(err)
    }
  }
}
