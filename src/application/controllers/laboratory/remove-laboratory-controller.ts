import { Request, Response } from 'express'
import { RemoveLaboratoryUseCase } from '../../../useCases/laboratory/remove-laboratory-usecase'
export class RemoveLaboratoryController {
  constructor (private removeLaboratoryUseCase: RemoveLaboratoryUseCase) {
    this.removeLaboratoryUseCase = removeLaboratoryUseCase
  }

  async remove (request: Request, response: Response): Promise<Response> {
    try {
      const labId = request.params.labId
      const deleteResult: any = await this.removeLaboratoryUseCase.remove(labId)
      if (deleteResult) {
        return response.status(200).json({ message: 'Laboratory deleted successfully.' })
      }
      return response.status(400).json({ message: 'Could not delete an inactive laboratory.' })
    } catch (err: any) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
