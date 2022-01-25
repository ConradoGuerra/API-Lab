import { Request, Response } from 'express'
import { FindAndUpdateLaboratoryUseCase } from '../../../useCases/laboratory/find-and-update-laboratory-usecase'
export class FindAndUpdateLaboratoryController {
  // Fazendo um construtor com o create do use case respeitando o próprio create
  constructor (private findAndUpdateLaboratoryUseCase: FindAndUpdateLaboratoryUseCase) {
    this.findAndUpdateLaboratoryUseCase = findAndUpdateLaboratoryUseCase
  }

  // Criamos uma função handler para trabalhar como um controller mesmo, vai buscar os dados enviados
  // Depois vai usar o create do use case
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const labId = request.params.labId
      const labData: { name: string, address: string, status: number } = request.body

      const laboratories = await this.findAndUpdateLaboratoryUseCase.execute(labId, labData)
      return response.status(200).json({ laboratories })
    } catch (err: any) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
