import styled from 'styled-components';
import { color, space, grid, typography, border, compose, flexbox } from 'styled-system';
import { Button } from '../Button/styles';

export const Form = styled.form`
  display: flex;
  max-width: 600px;

  ${compose(grid, flexbox)}

  ${Button} {
    flex: 1;
  }
`;

export const Input = styled.input`
  ${compose(color, space, typography)}

  outline: none;
  max-width: 380px;
  flex: 3;

  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.gray[50]};
  padding: ${({ theme }) => theme.space.xsmall};

  &:focus {
    border-color: ${({ theme }) => theme.colors.gray[600]};
  }
`;
