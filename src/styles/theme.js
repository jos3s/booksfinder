import { gray } from './colors';
import { buttons, badges } from './variants';

export const theme = {
  buttons: { ...buttons },
  badges: { ...badges },
  colors: {
    white: '#fff',
    textColor: '#000',
    gray: { ...gray },
    blueGray: '#455A64',
    background: '#F5F5F5',
    button: {
      bg: '#bdbdbd',
    },
    cards: {
      bg: '#fff',
      textColor: '#000',
    },
  },
  font: {
    primary: "'Comfortaa', cursive",
    secondary: "'Montserrat', sans-serif",
    sizes: {
      xsmall: '.8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
  spacings: {
    xsmall: '.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
  borders: {
    sm: '0.4rem',
    md: '0.8rem',
  },
};
