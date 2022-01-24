import { Request, Response } from 'express'
import { RemoveLaboratoryUseCase } from '../../useCases/laboratory/remove-laboratory-usecase'
export class RemoveLaboratoryController {
  // Fazendo um construtor com o create do use case respeitando o próprio create
  constructor (private removeLaboratoryUseCase: RemoveLaboratoryUseCase) {
    this.removeLaboratoryUseCase = removeLaboratoryUseCase
  }

  // Criamos uma função handler para trabalhar como um controller mesmo, vai buscar os dados enviados
  // Depois vai usar o create do use case
  async remove (request: Request, response: Response): Promise<Response> {
    try {
      const labId = request.params.labId
      await this.removeLaboratoryUseCase.remove(labId)
      return response.status(200).json({ message: 'Laboratory deleted successfully.' })
    } catch (err: any) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
