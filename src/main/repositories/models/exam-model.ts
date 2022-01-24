import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../helpers/sqlite-helper'
import { ExamData } from '../../../entities/exam-data'
import Laboratory from './laboratory-model'

export class Exam extends Model<ExamData> {}

Exam.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
  sequelize,
  modelName: 'exam'
}
)
Exam.belongsTo(Laboratory)

export default Exam
