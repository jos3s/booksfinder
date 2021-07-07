import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global';
import { themeLight } from '../src/styles/theme';
import { Routers } from './pages/router';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeLight}>
      <Routers />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
