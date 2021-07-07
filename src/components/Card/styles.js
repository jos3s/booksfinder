import styled from 'styled-components';
import { color, space, grid, border } from 'styled-system';

export const Card = styled.div`
  ${color}
  ${space}
  ${grid}
  ${border}

  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  align-items: center;

  width: 100%;
  height: 100%;

  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
