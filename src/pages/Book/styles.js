import styled from 'styled-components';
import { space, grid, flexbox, compose } from 'styled-system';
import { Card } from '../../components/Card/styles';

export const Container = styled.div`
  ${compose(space, grid, flexbox)}

  display: flex;
  width: 100%;

  @media (min-width: 900px) {
    ${Card} {
      &.image {
        position: sticky;
        top: 1rem;
        flex: 1;
      }

      &.content {
        flex: 3;
      }
    }
  }
`;

export const Main = styled.div`
  display: flex;
  ${compose(grid, flexbox)}
  height: 100%;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  ${compose(grid, flexbox)}
`;

export const Description = styled.div`
  section {
    margin: 0;
    margin-top: 0.8rem;
  }
`;

export const PublishedInfo = styled.section`
  > div {
    margin-top: 0.8rem;
    display: flex;
    gap: ${({ theme }) => theme.space.xsmall};
    align-items: center;
  }
`;

export const Rating = styled.section``;

export const Footer = styled.footer`
  > p {
    text-transform: capitalize;
  }
`;
