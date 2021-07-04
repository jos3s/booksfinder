import P from 'prop-types';
import * as Styled from './styles';

import { Heading } from './../Heading';
import { Link } from 'react-router-dom';

export const Card = ({
  srcImg = 'https://books.google.com.br/googlebooks/images/no_cover_thumb.gif',
  title,
  authors,
  publisher,
  published,
  language,
  id,
}) => {
  return (
    <Styled.Container>
      <Styled.Img src={srcImg} />
      <Styled.Info>
        <Heading size="small" as="h2">
          {title}
        </Heading>
        <Heading size="xsmall" as="h3">
          Author: {authors?.join(', ')}
        </Heading>
        <Link to={`books/${id}`}>More info</Link>
      </Styled.Info>
    </Styled.Container>
  );
};

Card.propTypes = {
  srcImg: P.string,
  title: P.string,
  authors: P.arrayOf(P.string),
  publisher: P.string,
  published: P.string,
  language: P.string,
  id: P.string,
};
