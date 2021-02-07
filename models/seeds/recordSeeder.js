const db = require('../../config/mongoose')
const Record = require('../record')
const dummyrecord = require('./dummyrecord.json').results

db.once('open', () => {
  const records = []
  dummyrecord.forEach(recordItem => {
    records.push(recordItem)
  })
  Record.create(records)
    .then(() => {
      console.log('insert data done...')
      return db.close()
    })
    .then(() => console.log('done creating recordseeder!'))
})