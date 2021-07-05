import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  gap: ${({ theme }) => theme.spacings.small};
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.cards.bg};
  border-radius: ${({ theme }) => theme.borders.md};
  color: ${({ theme }) => theme.colors.cards.textColor};
  padding: ${({ theme }) => theme.spacings.small};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
