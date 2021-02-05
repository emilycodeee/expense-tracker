const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const iconGenerator = require('../../Icongenerator')

// home page
router.get('/', (req, res) => {

  return Record.find()
    .lean()
    .then(records => {
      records.forEach(record => {
        record.icon = iconGenerator(record.category)
        console.log(record.category)
      })
      res.render('index', { records })
    })
    .catch(error => console.log(error))
})

module.exports = router