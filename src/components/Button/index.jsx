import P from 'prop-types';
import * as Styled from './styles';

export const Button = ({ children, variant = 'outline', ...rest }) => {
  return (
    <Styled.Button variant={variant} {...rest}>
      {children}
    </Styled.Button>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  variant: P.string,
  rest: P.object,
};
