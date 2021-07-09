import P from 'prop-types';
import * as Styled from './styles';

export const Text = ({ children, ...props }) => {
  return (
    <Styled.Wrapper m="0" fontFamily="Montserrat" fontSize="small" {...props}>
      {children}
    </Styled.Wrapper>
  );
};

Text.propTypes = {
  children: P.node,
};
