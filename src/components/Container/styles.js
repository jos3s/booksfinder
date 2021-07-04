import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem;
  max-width: 180rem;

  @media (min-width: 700px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media (min-width: 1800px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
