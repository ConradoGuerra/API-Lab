export class Laboratory {
    public readonly id?: number
    public readonly name: string
    public readonly address: string
    public readonly status: number

    constructor (name: string, address: string, status: number) {
      this.name = name
      this.address = address
      this.status = status
    }
}
