import app from './config/app'
import { sequelize } from './repositories/helpers/sqlite-helper'

// Listening to the port 8080 | Conectando à porta 8080
sequelize
  .sync()
  .then((result) => {
    app.listen(process.env.PORT || 8080, () => console.log('Server online!'))
  })
  .catch((err) => console.log(err))
