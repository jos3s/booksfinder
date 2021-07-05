import styled from 'styled-components';
import { variant } from 'styled-system';

export const Container = styled.div`
  ${variant({
    scale: 'badges',
    variants: {
      primary: {},
      secondary: {},
    },
  })}
  display: inline-block;
  padding: 0.35em 0.6em;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 10rem;
  font-size: ${({ theme }) => theme.font.sizes.small};
  outline: transparent solid 2px;
  outline-offset: 2px;
  margin: 0;
`;
