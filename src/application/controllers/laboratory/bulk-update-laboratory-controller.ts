import { Request, Response } from 'express'
import { BulkUpdateLaboratoryUseCase } from '../../../useCases/laboratory/bulk-update-laboratory-usecase'

export class BulkUpdateLaboratoryController {
  constructor (private bulkUpdateLaboratoryUseCase: BulkUpdateLaboratoryUseCase) {
    this.bulkUpdateLaboratoryUseCase = bulkUpdateLaboratoryUseCase
  }

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const labName = request.params.labName
      const labData: { name: string, address: string, status: number } = request.body
      const laboratorieResult: any = await this.bulkUpdateLaboratoryUseCase.bulkUpdate(labName, labData)
      if (laboratorieResult) {
        return response.status(200).json({ message: 'Laboratories updated successfully.' })
      }
      return response.status(400).json({ message: 'Could update an inactive laboratory.' })
    } catch (err: any) {
      return response.status(500).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
