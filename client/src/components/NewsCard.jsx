import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'

const NewsCard = ({ title, summary, imageUrl, url }) => {

  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', boxShadow: 3 }}>
      {/* Image */}
      <CardMedia component="img" height="200" image={imageUrl} alt={title} />

      {/* Content */}
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {summary}
        </Typography>
        <Button
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  )
}

export default NewsCard