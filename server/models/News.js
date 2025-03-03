const mongoose = require('mongoose')

const NewsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  imageUrl: { type: String, required: true },
  url: { type: String, required: true },
  publishedAt: { type: Date, default: Date.now }
})

const News = mongoose.model('News', NewsSchema)

module.exports = News