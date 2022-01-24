import { Laboratory } from '../../../src/entities/laboratory'
import { MissingParamError } from '../../../src/utils/errors/missing-param-error'

describe('Create Laboratory', () => {
  it('should return a created laboratory when its instantiated', async () => {
    const laboratory = new Laboratory()
    const createdLab = await laboratory.create({ name: 'any_lab', address: 'any_address', status: 1 })
    expect(createdLab.name).toBe('any_lab')
    expect(createdLab.address).toBe('any_address')
    expect(createdLab.status).toBe(1)
  })

  it('should return an error if is missing the name value to create the laboratory', async () => {
    const laboratory = new Laboratory()
    const promise = laboratory.create({ name: '', address: 'any_address', status: 1 })
    expect(promise).rejects.toThrow(new MissingParamError('name'))
  })

  it('should return an error if is missing the address value to create the laboratory', async () => {
    const laboratory = new Laboratory()
    const promise = laboratory.create({ name: 'any_name', address: '', status: 1 })
    expect(promise).rejects.toThrow(new MissingParamError('address'))
  })

  it('should return an error if the status is different from 0 (inactive) or 1 (active)', async () => {
    const laboratory = new Laboratory()
    const promise = laboratory.create({ name: 'any_name', address: 'any_address', status: 2 })
    expect(promise).rejects.toThrow(new MissingParamError('status'))
  })
})
