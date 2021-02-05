function iconGenerator(name) {
  const category = require('./models/seeds/category.json').results
  const icongroup = category.find(item => item.name === name)
  return icongroup.icon
}

module.exports = iconGenerator