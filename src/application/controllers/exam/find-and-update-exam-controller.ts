import { Request, Response } from 'express'
import { FindAndUpdateExamUseCase } from '../../../useCases/exam/find-and-update-exam-usecase'
export class FindAndUpdateExamController {
  constructor (private findAndUpdateExamUseCase: FindAndUpdateExamUseCase) {
    this.findAndUpdateExamUseCase = findAndUpdateExamUseCase
  }

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const examId = request.params.examId
      const examData: { name:string, type: string, status:number, laboratoryId: number } = request.body
      const exams = await this.findAndUpdateExamUseCase.execute(examId, examData)
      return response.status(200).json({ exams })
    } catch (err: any) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
