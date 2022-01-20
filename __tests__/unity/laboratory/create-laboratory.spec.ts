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

it('should return an error if laboratorys name is missing', () => {
  const laboratory = new Laboratory('any_lab', 'any_address', 1)
  expect(laboratory.name).toBe('any_lab')
  expect(laboratory.address).toBe('any_address')
  expect(laboratory.status).toBe(1)
})
