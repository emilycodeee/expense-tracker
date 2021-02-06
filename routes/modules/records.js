const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

// get new page
router.get('/new', (req, res) => {
  return Category.find()
    .lean()
    .then(categoryItem => res.render('new', { categoryItem }))
    .catch(error => console.log(error))
})

// post new data

router.post('/', (req, res) => {
  const record = req.body
  console.log(record)
  return Record.create(record)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})



module.exports = router