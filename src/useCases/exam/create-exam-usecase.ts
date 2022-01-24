import { ExamData } from '../../entities/exam-data'
import { ExamRepository } from '../ports/exam-repository'
import { Exam } from '../../entities/exam'

export class CreateExamUseCase {
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

    // Função de create genérica usando como requisito o laboratoryData
    async create (ExamData: ExamData): Promise<void> {
      const exam = new Exam()
      // Integrando a função da entidade para a criação do laboratório
      const createdExam = await exam.create(ExamData)
      //   Chamando a criação do lab repository
      await this.examRepository.create(createdExam)
    }
}
