import styled from 'styled-components';

export const Img = styled.img`
  height: 20rem;
  width: 12.8rem;
  border-radius: 0 ${({ theme }) => theme.borders.sm} ${({ theme }) => theme.borders.sm};
`;

export const Info = styled.div`
  > h3 {
    margin: ${({ theme }) => theme.spacings.small} 0;
  }
  > p {
    font-size: ${({ theme }) => theme.font.sizes.small};
    margin: ${({ theme }) => theme.spacings.xsmall} 0;
    font-family: ${({ theme }) => theme.font.secondary};
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
