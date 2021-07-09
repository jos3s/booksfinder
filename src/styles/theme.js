import { light, dark } from './system/colors';
import { space } from './system/space';
import { radii } from './system/radii';
import { fontSizes } from './system/fontSizes';
import { buttons, badges } from './system/variants';

const themeBases = {
  buttons,
  badges,
  font: {
    primary: "'Comfortaa', cursive",
    secondary: "'Montserrat', sans-serif",
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
  breakpoints: ['500px', '700px', '900px', '1080px', '1800px'],
  radii,
  space,
  fontSizes,
};

export const themeLight = {
  title: 'LightTheme',
  colors: { ...light },
  ...themeBases,
};

export const themeDark = {
  title: 'DarkTheme',
  colors: { ...dark },
  ...themeBases,
};
