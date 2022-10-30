
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Mode } from '@mui/icons-material';

//import { lightTheme, darkTheme } from '../themes';
//import { UIProvider } from '../context/ui';

const basicTheme = createTheme(
  {palette:{
    mode:'light'
  }

  }
)



function MyApp({ Component, pageProps }: AppProps) {
  return (

      <ThemeProvider theme={ basicTheme }>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>

  )
}

export default MyApp