import P from 'prop-types';
import { Book } from '../Book';
import * as Styled from './styles';

export const GridCards = ({ cards = [], ...props }) => {
  return (
    <Styled.Grid
      my="small"
      mx=" 0"
      gridGap="2rem"
      gridTemplateColumns={['1fr', null, null, 'repeat(auto-fill, minmax(35rem, 1fr))']}
      {...props}
    >
      {cards.map((card) => (
        <Book
          key={card.id}
          id={card.id}
          srcImg={card.srcImg}
          title={card.title}
          authors={card.authors}
          published={card.published}
        />
      ))}
    </Styled.Grid>
  );
};

GridCards.propTypes = {
  cards: P.arrayOf(P.shape(Book.propTypes)),
};
