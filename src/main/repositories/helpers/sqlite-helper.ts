
// Following the variables (test or production) will be instantiate the database | Dependendo da variável de ambiente (test ou produção), será instanciado um banco
import { Sequelize } from 'sequelize-typescript'
export const sequelize = new Sequelize({
  logging: false,
  dialect: 'sqlite',
  storage: './src/main/repositories/database.sqlite'
})
