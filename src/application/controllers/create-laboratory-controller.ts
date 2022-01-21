import { Request, Response } from 'express'
import { CreateLaboratoryUseCase } from 'src/useCases/laboratory/create-laboratory-usecase'

export class CreateLaboratoryController {
  // Fazendo um construtor com o create do use case respeitando o próprio create
  constructor (private createLaboratoryUseCase: CreateLaboratoryUseCase) {
    this.createLaboratoryUseCase = createLaboratoryUseCase
  }

  // Criamos uma função handler para trabalhar como um controller mesmo, vai buscar os dados enviados
  // Depois vai usar o create do use case
  async handle (request: Request, response: Response): Promise<Response> {
    const labData = { name: request.body.name, address: request.body.address, status: request.body.status }
    try {
      await this.createLaboratoryUseCase.create(labData)
      return response.status(201).json({ message: 'Deu bao' })
    } catch {
      throw new Error('deu merda')
    }
  }
}
