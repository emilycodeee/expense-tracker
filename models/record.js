const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
})

module.exports = ('Record', recordSchema)