import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: { main: '#333333' },
    secondary: { main: '#dc004e' },
    background: { default: '#f4f4f4' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
})

export default theme