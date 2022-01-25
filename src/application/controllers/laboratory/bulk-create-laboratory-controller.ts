import { Request, Response } from 'express'
import { BulkCreateLaboratoryUseCase } from '../../../useCases/laboratory/bulk-create-laboratory-usecase'
export class BulkCreateLaboratoryController {
  // Fazendo um construtor com o create do use case respeitando o próprio create
  constructor (private bulkcreateLaboratoryUseCase: BulkCreateLaboratoryUseCase) {
    this.bulkcreateLaboratoryUseCase = bulkcreateLaboratoryUseCase
  }

  // Criamos uma função handler para trabalhar como um controller mesmo, vai buscar os dados enviados
  // Depois vai usar o create do use case
  async handle (request: Request, response: Response): Promise<Response> {
    const laboratoriesData: [] = request.body
    try {
      await this.bulkcreateLaboratoryUseCase.bulkCreate(laboratoriesData)
      return response.status(201).json({ laboratoriesData })
    } catch (err: any) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
