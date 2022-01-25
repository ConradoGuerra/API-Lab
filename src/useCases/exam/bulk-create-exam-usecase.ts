import { ExamRepository } from '../ports/exam-repository'

export class BulkCreateExamUseCase {
    // Pegando a interface (modelo) dos dados do laboratório
    private readonly examRepository: ExamRepository
    constructor (
      // Criando o argumento do meu banco de dados
      databaseRepository: ExamRepository
    ) {
      // Instanciando o meu repositório de laboratórios na variável do construtor
      // atribuindo ao this as funções do repositório
      this.examRepository = databaseRepository
    }

    // Função de create genérica usando como requisito o examData
    async bulkCreate (examData: []): Promise<void> {
      // Integrando a função da entidade para a criação do laboratório
      await this.examRepository.bulkCreate(examData)
      //   Chamando a criação do lab repository
    }
}
