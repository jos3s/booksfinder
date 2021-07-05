import P from 'prop-types';
import * as Styled from './styles';

export const Badge = ({ children, variant = 'primary', ...props }) => {
  return (
    <Styled.Container variant={variant} {...props}>
      {children}
    </Styled.Container>
  );
};

Badge.propTypes = {
  children: P.node.isRequired,
  variant: P.string,
};
