const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

// get new page & renderCategory
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


// get edit page

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  const categoryItem = []
  Category.find()
    .lean()
    .then((item) => {
      categoryItem.push(...item)

      return Record.findById(id)
        .lean()
        .then(record => res.render('edit', { record, categoryItem }))
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})

// post edit page
router.post('/:id/edit', (req, res) => {
  const id = req.params.id
  const { name, date, category, amount } = req.body
  return Record.findById(id)
    .then((record) => {
      record.name = name
      record.date = date
      record.category = category
      record.amount = amount
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


module.exports = router