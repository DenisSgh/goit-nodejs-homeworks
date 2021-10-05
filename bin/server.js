const mongoose = require('mongoose')
require('dotenv').config()
require('colors')

const app = require('../app')

const { DB_HOST, PORT = 3000 } = process.env

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () =>
      app.listen(PORT, () => {
        console.log(`Server running. Use our API on port: ${PORT}`.brightYellow)
      }),
    console.log('Database connection successful'.green),
  )
  .catch(error => {
    console.log(error.message.red)
    process.exit(1)
  })
