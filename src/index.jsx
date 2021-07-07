import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeContextProvider } from './contexts/ThemeContext';

import { Routers } from './pages/router';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Routers />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
