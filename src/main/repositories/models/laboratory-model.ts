import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../helpers/sqlite-helper'
import { LaboratoryData } from '../../../entities/laboratory-data'

export class Laboratory extends Model<LaboratoryData> {}

Laboratory.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
  sequelize,
  modelName: 'laboratory'
}
)

export default Laboratory
