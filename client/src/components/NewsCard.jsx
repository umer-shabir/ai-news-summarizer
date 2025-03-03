import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material'

const NewsCard = ({ article }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 'auto' }}>
      <CardMedia component="img" height="200" image={article.imageUrl} alt={article.title} />
      <CardContent>
        <Typography variant="h6">{article.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {article.summary}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={article.url}
          target="_blank"
          sx={{ mt: 2 }}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  )
}

export default NewsCard