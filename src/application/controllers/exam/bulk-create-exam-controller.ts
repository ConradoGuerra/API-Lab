import { Request, Response } from 'express'
import { BulkCreateExamUseCase } from '../../../useCases/exam/bulk-create-exam-usecase'

export class BulkCreateExamController {
  constructor (private bulkCreateExamUseCase: BulkCreateExamUseCase) {
    this.bulkCreateExamUseCase = bulkCreateExamUseCase
  }

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const examsData: [] = request.body
      await this.bulkCreateExamUseCase.bulkCreate(examsData)
      return response.status(201).json({ examsData })
    } catch (err: any) {
      return response.status(500).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
