import { Request, Response } from 'express'
import { RemoveExamUseCase } from '../../../useCases/exam/remove-exam-usecase'
export class RemoveExamController {
  constructor (private removeexamUseCase: RemoveExamUseCase) {
    this.removeexamUseCase = removeexamUseCase
  }

  async remove (request: Request, response: Response): Promise<Response> {
    try {
      const examId = request.params.examId
      const deleteResult: any = await this.removeexamUseCase.remove(examId)
      if (deleteResult) {
        return response.status(200).json({ message: 'Exam deleted successfully.' })
      }
      return response.status(400).json({ message: 'Could not delete an inactive exam.' })
    } catch (err: any) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
