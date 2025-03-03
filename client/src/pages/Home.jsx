import { useState } from 'react'
import { Container, TextField, Grid, Typography } from '@mui/material'
import NewsCard from '../components/NewsCard' 

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const dummyNews = [
    {
      title: 'OpenAI Releases New Model',
      summary: 'OpenAI has launched a new language model...',
      imageUrl: 'https://via.placeholder.com/400', // Replace with actual image URL
      url: '#',
    },
    {
      title: 'Tech Stocks on the Rise',
      summary: 'The stock market sees a surge in tech stocks...',
      imageUrl: 'https://via.placeholder.com/400',
      url: '#',
    },
    {
      title: 'AI in Healthcare',
      summary: 'Artificial Intelligence is revolutionizing the medical field...',
      imageUrl: 'https://via.placeholder.com/400',
      url: '#',
    },
  ]

    // Filter news based on search input
    const filteredNews = dummyNews.filter((news) =>
      news.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <Container sx={{ mt: 4 }}>
      {/* Search Bar */}
      <TextField
        label="Search News"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 4 }}
      />

      {/* News Grid */}
      <Grid container spacing={3}>
        {filteredNews.length > 0 ? (
          filteredNews.map((news, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <NewsCard title={news.title} summary={news.summary} imageUrl={news.imageUrl} url={news.url} />
            </Grid>
          ))
        ) : (
          <p style={{ textAlign: 'center', width: '100%' }}>No news found</p>
        )}
      </Grid>
    </Container>
  )
}

export default Home