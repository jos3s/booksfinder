import styled from 'styled-components';
import { grid, flexbox, space, compose, layout } from 'styled-system';

export const Container = styled.div`
  display: flex;
  width: 100%;
  ${compose(flexbox, space, layout, grid)}
`;

export const Result = styled.div`
  margin-top: ${({ theme }) => theme.space.medium};
`;
