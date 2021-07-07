import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  html{
    font-size:62.5%;
    scroll-behavior:smooth;
  }
  body{
    font-size:1.6rem;
    background-color:${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.font.primary};
    color:${({ theme }) => theme.colors.text};
  }
  h1,h2,h3,h4,h5,h6{
    font-family: ${({ theme }) => theme.font.primary};
    margin:${({ theme }) => theme.space.large} 0;
    font-weight:700;
    margin:0;
  }
  p{
    margin:${({ theme }) => theme.space.medium} 0;
  }
  ul,ol{
    margin:${({ theme }) => theme.space.medium} 0;
    padding:${({ theme }) => theme.space.medium} 0;
  }
  a{
    text-decoration:none;
    color: ${({ theme }) => theme.colors.primary};
  }
  small{
    font-weight:700;
  }
`;
