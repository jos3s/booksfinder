import styled from 'styled-components';
import { border } from 'styled-system';
import { Card } from '../Card/styles';

export const Img = styled.img`
  ${border}
  height: 20rem;
  width: 12.8rem;
`;

export const Info = styled.div`
  > h3 {
    margin: ${({ theme }) => theme.space.small} 0;
  }
  > p {
    font-size: ${({ theme }) => theme.fontSizes.small};
    margin: ${({ theme }) => theme.space.xsmall} 0;
    font-family: ${({ theme }) => theme.font.secondary};
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 500px) {
    justify-content: space-evenly;
  }
`;

export const Book = styled.div`
  @media (min-width: 0px) and (max-width: 460px) {
    ${Card} {
      flex-direction: column;
    }
  }

  ${Card} {
    width: 100%;
  }
`;
