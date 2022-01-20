import { Request, Response } from 'express'
import { CreateLaboratoryUseCase } from 'src/useCases/laboratory/create-laboratory-usecase'

export class CreateLaboratoryController {
  // Pegando a interface (modelo) dos dados do laboratório
  constructor (private createLaboratoryUseCase: CreateLaboratoryUseCase) {
    this.createLaboratoryUseCase = createLaboratoryUseCase
  }

  async handle (resquest: Request, response: Response): Promise<Response> {
    const { name, address, status } = resquest.body
    try {
      await this.createLaboratoryUseCase.create({ name, address, status })
      return response.status(201).json({ message: 'Deu bao' })
    } catch {
      throw new Error('deu merda')
    }
  }
}
