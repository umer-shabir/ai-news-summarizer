import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material'

const NewsCard = ({ article }) => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        m: 'auto',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': { transform: 'scale(1.03)' },
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={article.imageUrl}
        alt={article.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {article.summary}
        </Typography>
        <Box textAlign="center">
          <Button
            variant="contained"
            color="primary"
            href={article.url}
            target="_blank"
            sx={{
              textTransform: 'none',
              fontWeight: 'bold',
              borderRadius: 2,
            }}
          >
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default NewsCard