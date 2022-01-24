import { Exam } from '../../../src/entities/exam'
import { MissingParamError } from '../../../src/utils/errors/missing-param-error'

describe('Create Exam', () => {
  it('should return a created Exam when its instantiated', async () => {
    const exam = new Exam()
    const createdLab = await exam.create({ name: 'any_lab', type: 'Imagem', status: 1, laboratoryId: 1 })
    expect(createdLab.name).toBe('any_lab')
    expect(createdLab.type).toBe('Imagem')
    expect(createdLab.status).toBe(1)
    expect(createdLab.laboratoryId).toBe(1)
  })

  it('should return an error if is missing the name value to create the Exam', async () => {
    const exam = new Exam()
    const promise = exam.create({ name: '', type: 'any_type', status: 1 })
    expect(promise).rejects.toThrow(new MissingParamError('name'))
  })

  it('should return an error if is missing the type value to create the Exam', async () => {
    const exam = new Exam()
    const promise = exam.create({ name: 'any_name', type: '', status: 1 })
    expect(promise).rejects.toThrow(new MissingParamError('type'))
  })

  it('should return an error if the status is different from 0 (inactive) or 1 (active)', async () => {
    const exam = new Exam()
    const promise = exam.create({ name: 'any_name', type: 'any_type', status: 2 })
    expect(promise).rejects.toThrow(new MissingParamError('status'))
  })
})
