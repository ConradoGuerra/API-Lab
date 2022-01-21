import { Laboratory } from '../../../src/entities/laboratory'

describe('Create Laboratory', () => {
  it('should return a created laboratory when its instatiated', () => {
    const laboratory = new Laboratory('any_lab', 'any_address', 1)
    expect(laboratory.name).toBe('any_lab')
    expect(laboratory.address).toBe('any_address')
    expect(laboratory.status).toBe(1)
  })
})
