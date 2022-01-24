import { LaboratoryData } from './laboratory-data'
import { MissingParamError } from '../../__tests__/unity/laboratory/create-laboratory.spec'

export class Laboratory {
  async create (laboratoryData: LaboratoryData) {
    if (!laboratoryData.name) {
      throw new MissingParamError('name')
    }
    if (!laboratoryData.address) {
      throw new MissingParamError('address')
    }
    if (laboratoryData.status !== 1 && laboratoryData.status !== 0) {
      throw new MissingParamError('status')
    }
    return laboratoryData
  }
}
