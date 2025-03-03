import { useState, useEffect } from 'react'
import { Container, TextField, Grid, Typography, Pagination } from '@mui/material'
import NewsCard from '../components/NewsCard'
import { fetchNews } from '../services/newsService'

const Home = () => {
  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews(page)
      setNews(data.news)
      setTotalPages(data.totalPages)
    }
    
    getNews()
  }, [page])


  // Filter news based on search input
  const filteredNews = news.filter(article =>
    article.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Container>
      <Typography
        variant="h4"
        sx={{
          mt: 3,
          mb: 2,
          textAlign: 'center',
          fontWeight: 'bold'
        }}
      >
        Latest AI News
      </Typography>

      {/* Search Bar */}
      <TextField
        fullWidth
        label="Search News..."
        variant="outlined"
        sx={{
          mb: 3,
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
          },
          '& .MuiInputLabel-root': {
            fontSize: '1rem',
          },
        }}
        onChange={e => setSearch(e.target.value)}
      />

      {/* Display News Cards */}
      <Grid container spacing={3}>
        {filteredNews.length > 0 ? (
          filteredNews.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <NewsCard article={article} />
            </Grid>
          ))
        ) : (
          <Typography sx={{ mt: 3, textAlign: 'center', width: '100%' }}>
            No news found
          </Typography>
        )}
      </Grid>

      {/* Pagination */}
      <Pagination
        count={totalPages}
        page={page}
        onChange={(event, value) => setPage(value)}
        sx={{
          mt: 4,
          display: 'flex',
          justifyContent: 'center',
          '& .MuiPaginationItem-root': {
            fontWeight: 'bold',
          },
        }}
      />
    </Container>
  )
}

export default Home