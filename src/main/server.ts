import app from './config/app'
import { sequelize } from './repositories/helpers/sqlite-helper'

sequelize
  .sync()
  .then((result) => {
    app.listen(process.env.PORT || 80, () => console.log('Server online!'))
  })
  .catch((err) => console.log(err))
