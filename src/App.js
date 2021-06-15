import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './components/Header'
import About from './pages/About'
import Services from './pages/Services'
// import { lightGreen } from '@material-ui/core/colors';
// import { green } from '@material-ui/core/colors';

const darkTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary:{
      main: '#42a5f5'
    }
  },
});

function App() {
  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <About />
        <Services />
      </ThemeProvider>
  );
}

export default App;
