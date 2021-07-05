import styled, { css } from 'styled-components';

const titleSize = {
  xsmall: (theme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ${({ theme, size }) => css`
    ${titleSize[size](theme)}
  `}
  text-transform:${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`;
