import { Request, Response } from 'express'
import { GetLaboratoriesByExamNameUseCase } from '../../../useCases/laboratory/get-labs-by-exam-name-usecase'
export class GetLaboratoriesByExamNameController {
  // Fazendo um construtor com o create do use case respeitando o próprio create
  constructor (private getLaboratoriesByExamNameUseCase: GetLaboratoriesByExamNameUseCase) {
    this.getLaboratoriesByExamNameUseCase = getLaboratoriesByExamNameUseCase
  }

  // Criamos uma função handler para trabalhar como um controller mesmo, vai buscar os dados enviados
  // Depois vai usar o create do use case
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const examName : string = request.params.examName.trim()
      const laboratories = await this.getLaboratoriesByExamNameUseCase.execute(examName)
      return response.status(200).json({ laboratories })
    } catch (err: any) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
