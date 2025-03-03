const express = require('express')
const axios = require('axios')
const News = require('../models/News')
require('dotenv').config()

const router = express.Router()

// Fetch news from an external API
router.get('/fetch', async (req, res) => {
  try {
    const apiKey = process.env.NEWS_API_KEY
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`)

    const articles = response.data.articles.map(article => ({
      title: article.title,
      summary: article.description || 'No summary available',
      imageUrl: article.urlToImage || 'https://via.placeholder.com/400',
      url: article.url
    }))

    // Save news to database
    await News.insertMany(articles, { ordered: false }).catch(() => {})

    res.json({ success: true, articles })
  } catch (error) {
    console.error('Error fetching news', error)
    res.status(500).json({ success: false, message: 'Error fetching news'})
  }
})

// Get saved news from MongoDB
router.get('/', async (req, res) => {
  try {
    const news = await News.find().sort({ publishedAt: -1 })
    res.json(news)
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error retrieving news' })
  }
})

module.exports = router