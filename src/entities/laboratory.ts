export class Laboratory {
    public readonly name: string
    public readonly address: string
    public readonly status: number

    private constructor (name: string, address: string, status: number) {
      this.name = name
      this.address = address
      this.status = status
    }
}
