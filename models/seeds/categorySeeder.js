const db = require('../../config/mongoose')
const Category = require('../category')
const categoryList = require('./category.json').results

db.once('open', () => {
  const categories = []
  categoryList.forEach(categoryItem => {
    categories.push(categoryItem)
  })
  Category.create(categories)
    .then(() => {
      console.log('insert data done...')
      return db.close()
    }).then(() => {
      console.log('done creating categoryseeder!')
    })
})

