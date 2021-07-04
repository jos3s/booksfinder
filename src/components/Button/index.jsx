import P from 'prop-types';
import * as Styled from './styles';

export const Button = ({ children }) => {
  return <Styled.Button>{children}</Styled.Button>;
};

Button.propTypes = {
  children: P.node.isRequired,
};
