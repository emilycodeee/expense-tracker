const db = require('../../config/mongoose')
const Record = require('../record')
const dummyrecord = require('./dummyrecord.json').results

db.once('open', () => {
  dummyrecord.forEach(recorditem => {
    Record.create({
      name: recorditem.name,
      category: recorditem.category,
      date: recorditem.date,
      amount: recorditem.amount
    })
  })
  console.log('done creating recordseeder!')
})