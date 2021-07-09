import styled, { css } from 'styled-components';
import { color, typography, compose, space } from 'styled-system';

const titleSize = {
  xsmall: (theme) => css`
    font-size: ${theme.fontSizes.small};
  `,
  small: (theme) => css`
    font-size: ${theme.fontSizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.fontSizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.fontSizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.fontSizes.xhuge};
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.fontSizes.xlarge};
  }
`;

export const Title = styled.h1`
  ${({ theme, size }) => css`
    ${titleSize[size](theme)}
  `}
  text-transform:${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};

  ${compose(typography, color, space)}
`;
