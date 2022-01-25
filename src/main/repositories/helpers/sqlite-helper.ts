import { Sequelize } from 'sequelize-typescript'
export const sequelize = new Sequelize({
  logging: false,
  dialect: 'sqlite',
  storage: './src/main/repositories/database.sqlite'
})
