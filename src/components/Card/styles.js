import styled from 'styled-components';
import { color, space, grid, border, flexbox, compose, layout } from 'styled-system';

export const Card = styled.div`
  display: flex;
  align-items: center;

  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  ${compose(flexbox, color, space, grid, border, layout)}
`;
