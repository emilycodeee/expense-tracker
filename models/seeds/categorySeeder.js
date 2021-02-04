const db = require('../../config/mongoose')
const Category = require('../category')
const categoryList = require('./category.json').results

db.once('open', () => {
  categoryList.forEach(categoryItem => {
    Category.create({
      name: categoryItem.name,
      name_en: categoryItem.name_en,
      icon: categoryItem.icon
    })
  })
  console.log('done creating categoryseeder!')
})