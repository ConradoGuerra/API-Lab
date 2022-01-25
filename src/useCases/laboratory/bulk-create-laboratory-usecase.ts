import { LaboratoryRepository } from '../ports/laboratory-repository'

export class BulkCreateLaboratoryUseCase {
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
    async bulkCreate (labData: []): Promise<void> {
      // Integrando a função da entidade para a criação do laboratório
      await this.laboratoryRepository.bulkCreate(labData)
      //   Chamando a criação do lab repository
    }
}
