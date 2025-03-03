import { useState } from 'react'
import { Container, TextField, Grid, Pagination, Box } from '@mui/material'
import NewsCard from '../components/NewsCard' 

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  const newsPerPage = 6

  const dummyNews = [
    { title: 'OpenAI Releases New Model', summary: 'OpenAI has launched...', imageUrl: 'https://via.placeholder.com/400', url: '#' },
    { title: 'Tech Stocks on the Rise', summary: 'The stock market sees...', imageUrl: 'https://via.placeholder.com/400', url: '#' },
    { title: 'AI in Healthcare', summary: 'Artificial Intelligence is...', imageUrl: 'https://via.placeholder.com/400', url: '#' },
    { title: 'Climate Change Updates', summary: 'Scientists report new...', imageUrl: 'https://via.placeholder.com/400', url: '#' },
    { title: 'New Space Discoveries', summary: 'NASA has uncovered...', imageUrl: 'https://via.placeholder.com/400', url: '#' },
    { title: 'Quantum Computing Breakthrough', summary: 'A major step in quantum...', imageUrl: 'https://via.placeholder.com/400', url: '#' },
    { title: 'Cybersecurity Trends', summary: 'Latest trends in...', imageUrl: 'https://via.placeholder.com/400', url: '#' },
  ]

    // Filter news based on search input
    const filteredNews = dummyNews.filter((news) =>
      news.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Pagination Logic
    const totalPages = Math.ceil(filteredNews.length / newsPerPage)
    const startIndex = (page - 1) * newsPerPage
    const paginatedNews = filteredNews.slice(startIndex, startIndex + newsPerPage)

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
        {paginatedNews.length > 0 ? (
          paginatedNews.map((news, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <NewsCard title={news.title} summary={news.summary} imageUrl={news.imageUrl} url={news.url} />
            </Grid>
          ))
        ) : (
          <p style={{ textAlign: 'center', width: '100%' }}>No news found</p>
        )}
      </Grid>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(event, value) => setPage(value)}
            color="primary"
          />
        </Box>
      )}
    </Container>
  )
}

export default Home