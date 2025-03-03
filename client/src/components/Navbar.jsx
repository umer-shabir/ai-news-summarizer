import { AppBar, Toolbar, Typography } from '@mui/material'

const Navbar = () => {

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Typography
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          textAlign:'center',
          fontWeight: 'bold',
          letterSpacing: '1px',
        }}
        >
          AI News Summarizer
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar