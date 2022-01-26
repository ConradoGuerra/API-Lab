import { Request, Response } from 'express'
import { CreateExamUseCase } from '../../../useCases/exam/create-exam-usecase'
export class CreateExamController {
  constructor (private createExamUseCase: CreateExamUseCase) {
    this.createExamUseCase = createExamUseCase
  }

  async handle (request: Request, response: Response): Promise<Response> {
    const examData: { name:string, type: string, status:number, laboratoryId: number } = request.body
    try {
      const createdExam = await this.createExamUseCase.create(examData)
      return response.status(201).json({ createdExam })
    } catch (err: any) {
      return response.status(500).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
