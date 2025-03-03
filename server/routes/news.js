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

    if (!response.data.articles || response.data.articles.length === 0) {
      return res.status(404).json({ success: false, message: 'No news found' })
    }

    const articles = response.data.articles.map(article => ({
      title: article.title,
      summary: article.description || 'No summary available',
      imageUrl: article.urlToImage || 'https://via.placeholder.com/400',
      url: article.url,
      publishedAt: article.publishedAt
    }))

    for (let article of articles) {
      await News.updateOne(
        { title: article.title }, // Check if the article already exists by title
        { $setOnInsert: article }, // Insert only if it doesn’t exist
        { upsert: true } // Prevents duplicates
      )
    }

    res.json({ success: true, message: 'News updated successfully' })
  } catch (error) {
    console.error('Error fetching news', error.message)
    res.status(500).json({ success: false, message: 'Internal server error'})
  }
})

// Get saved news from MongoDB
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = 10
    const skip = (page - 1) * limit

    const news = await News.find().sort({ publishedAt: -1 }).skip(skip).limit(limit)
    const totalArticles = await News.countDocuments()

    res.json({
      success: true,
      page,
      totalPages: Math.ceil(totalArticles / limit),
      news
    })
  } catch (error) {
    console.error('Error retrieving news', error.message)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
})

module.exports = router