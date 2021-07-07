import styled from 'styled-components';
import { space, grid } from 'styled-system';
import { Card } from '../../components/Card/styles';
import { Container as Badge } from '../../components/Badge/styles';

export const Container = styled.div`
  ${space}
  ${grid}

  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-around;

  p {
    margin: 0;
  }

  ${Card} {
    justify-content: space-between;
    &.content {
      align-items: flex-start;
      > p {
        margin: 0;
      }
    }

    &.image {
      align-content: center;
      justify-content: center;
      width: auto;
      > img {
        height: 40rem;
        border-radius: ${({ theme }) => theme.radii.sm};
      }
    }
  }

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    ${Card} {
      &.image {
        position: sticky;
        top: 1rem;
        flex: 1;
        height: 50rem;
        max-width: 38rem;
        width: auto;
        > img {
          height: 100%;
        }
      }

      &.content {
        flex: 3;
      }
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  ${grid}
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  ${grid}

  > ${Badge} {
    width: 8rem;
  }
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

export const Rating = styled.section`
  > p {
    margin-top: 0.8rem;
  }
`;

export const Footer = styled.footer`
  > p {
    text-transform: capitalize;
    margin-top: 0.8rem;
  }
`;

export const ContainerNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${space}
  text-align: center;

  > p {
    margin: 0;
    margin-bottom: 0.8rem;
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  > img {
    margin-top: 3rem;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 500px) {
    > img {
      width: 35rem;
      height: 35rem;
    }
    > p {
      font-size: ${({ theme }) => theme.fontSizes.medium};
    }
  }
`;
