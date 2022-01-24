
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

  // async findAll (): Promise<any> {
  //   try {
  //     const laboratoriesFound = await Laboratory.findAll({
  //       where: {
  //         status: 1
  //       }
  //     })
  //     return laboratoriesFound
  //   } catch (err: any) {
  //     throw new Error(err)
  //   }
  // }

  // async findAndUpdate (labId: number, labData: ExamData): Promise<any> {
  //   try {
  //     const laboratory = await Laboratory.findByPk(labId)
  //     return await laboratory?.update(labData)
  //   } catch (err: any) {
  //     throw new Error(err)
  //   }
  // }

  // async remove (labId: number): Promise<any> {
  //   try {
  //     await Laboratory.destroy({ where: { id: labId } })
  //     return true
  //   } catch (err: any) {
  //     throw new Error(err)
  //   }
  // }
}
