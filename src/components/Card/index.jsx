import P from 'prop-types';
import * as Styled from './styles';

export const Card = ({ children, ...props }) => {
  return (
    <Styled.Card
      color="text"
      bg="cardBg"
      p="small"
      gridGap="small"
      borderRadius="md"
      flexDirection={['column', 'row']}
      width="100%"
      height="100%"
      {...props}
    >
      {children}
    </Styled.Card>
  );
};

Card.propTypes = {
  children: P.node.isRequired,
  column: P.bool,
};
