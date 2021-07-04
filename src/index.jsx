import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global';
import { theme } from '../src/styles/theme';
import { Routers } from './pages/router';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routers />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
