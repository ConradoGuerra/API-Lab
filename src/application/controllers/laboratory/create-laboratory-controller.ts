import { Request, Response } from 'express'
import { CreateLaboratoryUseCase } from '../../../useCases/laboratory/create-laboratory-usecase'
export class CreateLaboratoryController {
  constructor (private createLaboratoryUseCase: CreateLaboratoryUseCase) {
    this.createLaboratoryUseCase = createLaboratoryUseCase
  }

  async handle (request: Request, response: Response): Promise<Response> {
    const labData: { name: string, address: string, status: number } = request.body
    try {
      const createdLab = await this.createLaboratoryUseCase.create(labData)
      return response.status(201).json({ createdLab })
    } catch (err: any) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
