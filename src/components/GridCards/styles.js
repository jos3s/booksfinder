import styled from 'styled-components';

export const Container = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 2rem 0;
  max-width: 180rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  }

  @media (min-width: 1800px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
