import { Request, Response } from 'express'
import { CreateExamUseCase } from '../../../useCases/exam/create-exam-usecase'
export class CreateExamController {
  // Fazendo um construtor com o create do use case respeitando o próprio create
  constructor (private createExamUseCase: CreateExamUseCase) {
    this.createExamUseCase = createExamUseCase
  }

  // Criamos uma função handler para trabalhar como um controller mesmo, vai buscar os dados enviados
  // Depois vai usar o create do use case
  async handle (request: Request, response: Response): Promise<Response> {
    const examData: { name:string, type: string, status:number, laboratoryId: number } = request.body
    try {
      await this.createExamUseCase.create(examData)
      return response.status(201).json({ examData })
    } catch (err: any) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
