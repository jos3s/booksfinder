import styled from 'styled-components';
import { variant, space, typography, border, layout, compose } from 'styled-system';

export const Button = styled.button`
  ${variant({
    scale: 'buttons',
    variants: {
      primary: {},
      secondary: {},
    },
  })}

  ${compose(space, typography, border, layout)}

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: opacity(0.9);
  }
`;
