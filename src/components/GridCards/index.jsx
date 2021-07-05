import P from 'prop-types';
import { Book } from '../Book';
import * as Styled from './styles';

export const GridCards = ({ cards = [] }) => {
  return (
    <Styled.Grid>
      {cards.map((card) => (
        <Book
          key={card.id}
          id={card.id}
          srcImg={card.srcImg}
          title={card.title}
          authors={card.authors}
          publisher={card.publisher}
          published={card.published}
          language={card.language}
        />
      ))}
    </Styled.Grid>
  );
};

GridCards.propTypes = {
  cards: P.arrayOf(P.shape(Book.propTypes)),
};
