import styled from 'styled-components';
import { variant } from 'styled-system';

export const Button = styled.button`
  ${variant({
    scale: 'buttons',
    variants: {
      primary: {},
      secondary: {},
    },
  })}

  padding:${({ theme }) => theme.spacings.xsmall};
  font-size: ${({ theme }) => theme.font.sizes.small};
  border-radius: ${({ theme }) => theme.borders.sm};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: opacity(0.9);
  }
`;
