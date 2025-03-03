require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const newsRoutes = require('./routes/news')

const app = express()
app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB Connection Error: ', err))

app.get('/', (req, res) => {
  res.send('AI News Summarizer Backend is Running!')
})

app.use('/news', newsRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))