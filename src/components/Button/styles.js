import styled from 'styled-components';
import { variant, space, typography, border } from 'styled-system';

export const Button = styled.button`
  ${variant({
    scale: 'buttons',
    variants: {
      primary: {},
      secondary: {},
    },
  })}

  ${space}
  ${typography}
  ${border}

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: opacity(0.9);
  }
`;
