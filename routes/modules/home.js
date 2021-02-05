const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')
const iconGenerator = require('../../Icongenerator')

// home page
router.get('/', (req, res) => {
  let totalAmount = 0

  const categoryItem = []
  Category.find()
    .lean()
    .then((item) => {
      categoryItem.push(...item)
      console.log(categoryItem)

      Record.find()
        .lean()
        .then(records => {
          records.forEach(record => {
            totalAmount += record.amount
            record.icon = iconGenerator(record.category)
            console.log(record.category)
          })
          res.render('index', { records, totalAmount, categoryItem })
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})
module.exports = router