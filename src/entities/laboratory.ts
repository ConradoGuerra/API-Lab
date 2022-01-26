import { LaboratoryData } from './laboratory-data'
import { MissingParamError } from '../utils/errors/missing-param-error'
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
    return {
      ...laboratoryData,
      name: laboratoryData.name.trim(),
      address: laboratoryData.address.trim()
    }
  }
}
