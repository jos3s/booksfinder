import P from 'prop-types';
import { Card } from '../Card';
import * as Styled from './styles';

export const GridCards = ({ cards = [] }) => {
  return (
    <Styled.Container>
      <Styled.Grid>
        {cards.map((card) => (
          <Card
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
    </Styled.Container>
  );
};

GridCards.propTypes = {
  cards: P.arrayOf(P.shape(Card.propTypes)),
};
