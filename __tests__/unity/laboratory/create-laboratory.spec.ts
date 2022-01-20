class Laboratory {
  name: string
  constructor (name: string) {
    this.name = name
  }
}

it('should return a laboratory name', () => {
  const laboratory = new Laboratory('any_name')
  expect(laboratory.name).toBe('any_name')
})
