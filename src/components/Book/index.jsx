import P from 'prop-types';
import * as Styled from './styles';

import { Heading } from './../Heading';
import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Card } from '../Card';

export const Book = ({ srcImg, title, authors, published, id }) => {
  return (
    <Styled.Book>
      <Card>
        <Styled.Img src={srcImg} />
        <Styled.Content>
          <Styled.Info>
            <Heading size="small" as="h2">
              {title}
            </Heading>
            <Heading size="xsmall" as="h3">
              Author: {authors?.join(', ') || 'Unknown'}
            </Heading>
            <p>
              Published: <time>{published || 'Unknown'}</time>
            </p>
          </Styled.Info>
          <Link to={`books/${id}`}>
            <Button>More info</Button>
          </Link>
        </Styled.Content>
      </Card>
    </Styled.Book>
  );
};

Book.propTypes = {
  srcImg: P.string,
  title: P.string,
  authors: P.arrayOf(P.string),
  published: P.string,
  id: P.string,
};
