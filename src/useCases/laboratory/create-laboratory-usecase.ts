import { LaboratoryRepository } from '../ports/laboratory-repository'
// import { Laboratory } from '../../entities/laboratory'
import { LaboratoryData } from 'src/entities/laboratoryData'

export class CreateLaboratoryUseCase {
    // Pegando a interface (modelo) dos dados do laboratório
    private readonly laboratoryRepository: LaboratoryRepository
    constructor (
      // Instanciando o meu repositório de laboratórios na variável do construtor
      laboratoryRepository: LaboratoryRepository
    ) {
      // atribuindo ao this as funções do repositório
      this.laboratoryRepository = laboratoryRepository
    }

    // Função de create genérica
    async create (laboratoryData: LaboratoryData) {
      //   Chamando a criação do lab repository
      await this.laboratoryRepository.create(laboratoryData)
    }
}
