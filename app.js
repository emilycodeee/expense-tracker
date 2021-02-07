// express packages 
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = process.env.PORT || 3000
// require packages used in the project
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// require routes & config profile
const routes = require('./routes')
require('./config/mongoose')

// body parser && method-override
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// routes setting - Read
app.use(routes)

app.listen(PORT, () => {
  console.log(`express is listening on http://localhost:${PORT}`)
})
