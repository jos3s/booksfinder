import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray[600]};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.blueGray};
  }

  &:visited {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;
