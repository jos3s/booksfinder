import { colorStyle } from 'styled-system';

const gray = [
  '#f5f5f5',
  '#d8d8d8',
  '#b8b8b8',
  '#a8a8a8',
  '#8d8d8d',
  '#737373',
  '#5d5d5d',
  '#4d4d4d',
  '#3b3b3b',
];

export const colors = {
  white: '#ffffff',
  black: '#000000',
  blueGray: ['#607D8B', '#455A64'],
  darkPurple: '#34325e',
};

export const light = {
  text: colors.black,
  background: colors.white,
  cardBg: '#fff',
  primary: colors.blueGray[1],
  secondary: colors.darkPurple,
  gray,
};

export const dark = {
  text: '#ffffffad',
  background: '#1e2021',
  cardBg: '#181a1b',
  primary: colors.blueGray[0],
  secondary: colors.darkPurple,
  gray,
};
