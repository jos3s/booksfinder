import P from 'prop-types';
import * as Styled from './styles';

export const Container = ({ children, ...props }) => {
  return (
    <Styled.Container
      my="2rem"
      mx={['2rem', null, '3rem', null, null, 'auto']}
      {...props}
    >
      {children}
    </Styled.Container>
  );
};

Container.propTypes = {
  children: P.node.isRequired,
};
