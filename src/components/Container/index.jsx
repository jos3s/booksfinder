import P from 'prop-types';
import * as Styled from './styles';

export const Container = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

Container.propTypes = {
  children: P.node.isRequired,
};
