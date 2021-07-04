import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.small};
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.cards.bg};
  border-radius: ${({ theme }) => theme.borders.md};
  color: ${({ theme }) => theme.colors.cards.textColor};
  padding: ${({ theme }) => theme.spacings.small};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

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
