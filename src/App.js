import React, {useState} from 'react'
import './App.scss'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './components/Header'
import Home from './pages/Home'
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
  const [darkMode,setDarkMode] = useState()

  return (
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Home />
        <Services />
      </ThemeProvider>
  );
}

export default App;
