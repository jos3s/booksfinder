import styled from 'styled-components';
import { Card } from '../../components/Card/styles';
import { Container as Badge } from '../../components/Badge/styles';

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacings.medium};
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.spacings.small};
  align-items: center;
  justify-content: space-around;

  p {
    margin: 0;
  }

  ${Card} {
    justify-content: space-between;

    &.content {
      padding: ${({ theme }) => theme.spacings.medium};

      align-items: flex-start;
      gap: ${({ theme }) => theme.spacings.large};

      > p {
        margin: 0;
      }
    }

    &.image {
      align-content: center;
      justify-content: center;
      > img {
        height: 40rem;
        border-radius: ${({ theme }) => theme.borders.sm};
      }
    }
  }

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    ${Card} {
      &.image {
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
  gap: ${({ theme }) => theme.spacings.medium};
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.xsmall};

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
    gap: ${({ theme }) => theme.spacings.xsmall};
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
  margin: 4rem 0;
  text-align: center;

  > p {
    margin: 0;
    margin-bottom: 0.8rem;
    font-size: ${({ theme }) => theme.font.sizes.small};
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
      font-size: ${({ theme }) => theme.font.sizes.medium};
    }
  }
`;
