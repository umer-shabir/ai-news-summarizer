import { AppBar, Toolbar, Typography } from '@mui/material'

const Navbar = () => {

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
          AI News Summarizer
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar