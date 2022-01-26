import app from './config/app'
import { sequelize } from './repositories/helpers/sqlite-helper'
import 'dotenv/config'

sequelize
  .sync()
  .then((result) => {
    app.listen(process.env.PORT || 8080, () => console.log('Server online!'))
  })
  .catch((err) => console.log(err))
