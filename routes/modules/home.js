const express = require('express')

const Record = require('../../models/record')
const Category = require('../../models/category')
const iconGenerator = require('../../Icongenerator')

const router = express.Router()

// homepage render
router.get('/', (req, res) => {
  const filterItem = req.query.category || ''
  const selected = {}
  if (filterItem) {
    selected.category = filterItem
  }

  let totalAmount = 0
  const categoryItem = []

  // category option
  Category.find()
    .lean()
    .then((item) => {
      categoryItem.push(...item)

      // list render
      Record.find(selected)
        .lean()
        .then(records => {
          records.forEach(record => {
            totalAmount += record.amount
            record.icon = iconGenerator(record.category)
          })
          res.render('index', { records, totalAmount, categoryItem, filterItem })
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})




module.exports = router