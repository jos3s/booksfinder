import P from 'prop-types';
import * as Styled from './styles';

export const Card = ({ children, column = false, ...props }) => {
  return (
    <Styled.Card
      column={column}
      color="text"
      bg="cardBg"
      p="small"
      gridGap="small"
      borderRadius="md"
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
