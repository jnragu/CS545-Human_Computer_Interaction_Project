import React from 'react'
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './theme'
import Dashboard  from './components/Dashboard/Dashboard'

const App = () => {
  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline>
        <Dashboard />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
