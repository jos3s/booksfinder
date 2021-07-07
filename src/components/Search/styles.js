import styled from 'styled-components';
import { color, space, grid, typography, border } from 'styled-system';
import { Button } from '../Button/styles';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 600px;

  ${grid}

  @media (min-width: 500px) {
    flex-direction: row;
  }

  ${Button} {
    flex: 1;
  }
`;

export const Input = styled.input`
  ${color}
  ${space}
  ${typography}
  ${border}

  outline: none;
  width: 100%;
  flex: 3;

  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  background: ${({ theme }) => theme.colors.gray[50]};

  @media (min-width: 500px) {
    width: 50rem;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.gray[600]};
  }
`;
