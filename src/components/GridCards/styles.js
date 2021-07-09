import styled from 'styled-components';
import { grid, space, compose } from 'styled-system';

export const Grid = styled.div`
  display: grid;
  max-width: 180rem;

  ${compose(grid, space)}
`;
