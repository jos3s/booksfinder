import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacings.xsmall};
  max-width: 600px;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

export const Input = styled.input`
  outline: none;
  padding: ${({ theme }) => theme.spacings.xsmall};
  width: 100%;
  font-size: ${({ theme }) => theme.font.sizes.small};

  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: ${({ theme }) => theme.borders.md};
  background: ${({ theme }) => theme.colors.gray[50]};

  flex: 3;

  @media (min-width: 500px) {
    width: 50rem;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.gray[600]};
  }
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.spacings.xsmall};
  font-size: ${({ theme }) => theme.font.sizes.small};
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: ${({ theme }) => theme.borders.md};

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[50]};
  }
`;
