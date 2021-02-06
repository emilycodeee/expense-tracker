// require packages used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser')

// setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// require routes & config profile
const routes = require('./routes')
require('./config/mongoose')

// body parser
app.use(bodyParser.urlencoded({ extended: true }))

// routes setting - Read
app.use(routes)

app.listen('3000', () => {
  console.log('express is listening on http://localhost:3000')
})
