
// import { LaboratoryRepository } from '../../useCases/ports/laboratory-repository'
import { LaboratoryData } from '../../entities/laboratory-data'
import { Laboratory } from './models/laboratory-model'
export class SqLiteRepository {
  async create (labData: LaboratoryData): Promise<void> {
    try {
      await Laboratory.create(labData)
    } catch (err: any) {
      throw new Error(err)
    }
  }

  async findAll (): Promise<any> {
    try {
      const laboratoriesFound = await Laboratory.findAll({
        where: {
          status: 1
        }
      })
      return laboratoriesFound
    } catch (err: any) {
      throw new Error(err)
    }
  }

  async findAndUpdate (labId: number, labData: LaboratoryData): Promise<any> {
    try {
      const laboratory = await Laboratory.findByPk(labId)
      return await laboratory?.update(labData)
    } catch (err: any) {
      throw new Error(err)
    }
  }

  async remove (labId: number): Promise<any> {
    try {
      const deleteResult = await Laboratory.destroy({ where: { id: labId, status: 1 } })
      if (deleteResult) {
        return true
      }
      return false
    } catch (err: any) {
      throw new Error(err)
    }
  }
}
