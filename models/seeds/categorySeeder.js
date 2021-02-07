const db = require('../../config/mongoose')
const Category = require('../category')
const categoryList = require('./category.json').results

db.once('open', () => {
  const categories = []
  categoryList.forEach(categoryItem => {
    categories.push(
      Category.create({
        name: categoryItem.name,
        name_en: categoryItem.name_en,
        icon: categoryItem.icon
      })
    )
  })
  console.log('done creating categoryseeder!')
  Promise.all(categories)
    .catch(error => console.log(error))
    .finally(() => db.close())
})

// db.once('open', () => {
//   const categories = []
//   categoryList.forEach(categoryItem => {
//     categories.push(categoryItem)
//   })
//   Category.create(categories)
//     .then(() => {
//       console.log('insert data done...')
//       return db.close()
//     }).then(() => {
//       console.log('done creating categoryseeder!')
//     })
// })

// db.once("open", () => {
//   const categories = [];
//   categories.push(
//     Category.create({
//       name: categoryItem.name,
//       iconURL: categoryItem.iconURL,
//       icon: categoryItem.icon
//     })
//   );
//   Promise.all(categories)
//     .catch(err => ...do something)
//     .finally(() => db.close())
// });