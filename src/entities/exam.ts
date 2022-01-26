import { ExamData } from './exam-data'
import { MissingParamError } from '../utils/errors/missing-param-error'

export class Exam {
  async create (examData: ExamData) {
    if (!examData.name) {
      throw new MissingParamError('name')
    }
    if (examData.status !== 1 && examData.status !== 0) {
      throw new MissingParamError('status')
    }
    if (examData.type !== 'Análise Clínica' && examData.type !== 'Imagem') {
      throw new MissingParamError('type')
    }
    if (!examData.laboratoryId) {
      throw new MissingParamError('laboratory')
    }
    return { ...examData, name: examData.name.trim() }
  }
}
