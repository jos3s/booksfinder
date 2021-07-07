import styled from 'styled-components';
import { color } from 'styled-system';

export const Link = styled.a`
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  ${color}

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;
