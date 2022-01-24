import { Request, Response } from 'express'
import { GetLaboratoryUseCase } from '../../../useCases/laboratory/get-laboratory-usecase'
export class GetLaboratoryController {
  // Fazendo um construtor com o create do use case respeitando o próprio create
  constructor (private getLaboratoryUseCase: GetLaboratoryUseCase) {
    this.getLaboratoryUseCase = getLaboratoryUseCase
  }

  // Criamos uma função handler para trabalhar como um controller mesmo, vai buscar os dados enviados
  // Depois vai usar o create do use case
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const laboratories = await this.getLaboratoryUseCase.execute()
      return response.status(200).json({ laboratories })
    } catch (err: any) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
