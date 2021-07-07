import { createContext, useState, useEffect } from 'react';
import * as P from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global';
import { themeLight, themeDark } from '../styles/theme';

export const ThemeContext = createContext({});
export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(themeLight);
  const themeTitle = theme.title;

  useEffect(() => {
    const localTheme = window.localStorage.getItem('@jo3s/booksfinder');

    localTheme && setTheme(JSON.parse(localTheme));
  }, []);

  const toggleTheme = () => {
    if (themeTitle === 'LightTheme') {
      window.localStorage.setItem('@jo3s/booksfinder', JSON.stringify(themeDark));
      setTheme(themeDark);
    } else {
      window.localStorage.setItem('@jo3s/booksfinder', JSON.stringify(themeLight));
      setTheme(themeLight);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        themeTitle,
        theme,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

ThemeContextProvider.propTypes = {
  children: P.node,
};
