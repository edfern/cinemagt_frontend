import { ThemeProvider, createTheme } from '@mui/material';
import Header from '../components/header';
import '../styles/globals.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <div className="main">
          <div className="main-container">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
