import { LaboratoryRepository } from '../ports/laboratory-repository'
import { LaboratoryData } from '../../entities/laboratory-data'
import { Laboratory } from '../../entities/laboratory'

export class CreateLaboratoryUseCase implements LaboratoryRepository {
    // Pegando a interface (modelo) dos dados do laboratório
    private readonly laboratoryRepository: LaboratoryRepository
    constructor (
      // Criando o argumento do meu banco de dados
      databaseRepository: LaboratoryRepository
    ) {
      // Instanciando o meu repositório de laboratórios na variável do construtor
      // atribuindo ao this as funções do repositório
      this.laboratoryRepository = databaseRepository
    }

    // Função de create genérica usando como requisito o laboratoryData
    async create (labData: LaboratoryData): Promise<void> {
      const laboratory = new Laboratory(labData.name, labData.address, labData.status)
      //   Chamando a criação do lab repository
      await this.laboratoryRepository.create(laboratory)
    }
}
