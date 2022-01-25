import { Request, Response } from 'express'
import { GetLaboratoryUseCase } from '../../../useCases/laboratory/get-laboratory-usecase'
export class GetLaboratoryController {
  constructor (private getLaboratoryUseCase: GetLaboratoryUseCase) {
    this.getLaboratoryUseCase = getLaboratoryUseCase
  }

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const laboratories = await this.getLaboratoryUseCase.execute()
      return response.status(200).json({ laboratories })
    } catch (err: any) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
