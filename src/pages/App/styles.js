import styled from 'styled-components';
import { Grid as GridCards } from '../../components/GridCards/styles';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.small};

  @media (min-width: 1080px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  > div {
    > p {
      margin: 0;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 4rem 0;
  text-align: center;

  > p {
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

export const Result = styled.div`
  margin-top: ${({ theme }) => theme.spacings.medium};

  ${GridCards} {
    margin-top: 0.5rem;
  }
`;
