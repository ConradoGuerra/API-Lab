class Laboratory {
    public readonly name: string
    public readonly address: string
    public readonly status: number

    constructor (name: string, address: string, status: number) {
      this.name = name
      this.address = address
      this.status = status
    }
}

it('should return the correct proporties of the laboratory created', () => {
  const laboratory = new Laboratory('any_lab', 'any_address', 1)
  expect(laboratory.name).toBe('any_lab')
  expect(laboratory.address).toBe('any_address')
  expect(laboratory.status).toBe(1)
})
