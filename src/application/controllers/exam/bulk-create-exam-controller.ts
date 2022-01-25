import { Request, Response } from 'express'
import { BulkCreateExamUseCase } from '../../../useCases/exam/bulk-create-exam-usecase'

export class BulkCreateExamController {
  // Fazendo um construtor com o create do use case respeitando o próprio create
  constructor (private bulkCreateExamUseCase: BulkCreateExamUseCase) {
    this.bulkCreateExamUseCase = bulkCreateExamUseCase
  }

  // Criamos uma função handler para trabalhar como um controller mesmo, vai buscar os dados enviados
  // Depois vai usar o create do use case
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const examsData: [] = request.body
      await this.bulkCreateExamUseCase.bulkCreate(examsData)
      return response.status(201).json({ examsData })
    } catch (err: any) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
