import { Request, Response } from 'express'
import { GetExamUseCase } from '../../../useCases/exam/get-exam-usecase'
export class GetExamController {
  // Fazendo um construtor com o create do use case respeitando o próprio create
  constructor (private getExamUseCase: GetExamUseCase) {
    this.getExamUseCase = getExamUseCase
  }

  // Criamos uma função handler para trabalhar como um controller mesmo, vai buscar os dados enviados
  // Depois vai usar o create do use case
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const exams = await this.getExamUseCase.execute()
      return response.status(200).json({ exams })
    } catch (err: any) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
