import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { AuthProvider } from './context/authContext';
import { Layout } from './components';
import Routes from './routes';

const App = () => (
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  </AuthProvider>
);

export default App;
