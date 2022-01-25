import { Request, Response } from 'express'
import { GetExamUseCase } from '../../../useCases/exam/get-exam-usecase'
export class GetExamController {
  constructor (private getExamUseCase: GetExamUseCase) {
    this.getExamUseCase = getExamUseCase
  }

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const exams = await this.getExamUseCase.execute()
      return response.status(200).json({ exams })
    } catch (err: any) {
      return response.status(404).json({ message: err.message || 'Exam doesnt exist.' })
    }
  }
}
