import styled from 'styled-components';

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

export const Load = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 4rem 0;
`;
