import P from 'prop-types';
import * as Styled from './styles';

import { Heading } from './../Heading';
import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { Image } from '../../components/Image';
import { Card } from '../Card';

export const Book = ({ srcImg, title, authors, published, id }) => {
  return (
    <Styled.Wrapper>
      <Card>
        <Image
          src={srcImg}
          alt={title}
          borderRadius="sm"
          width="12.8rem"
          height="20rem"
        />
        <Styled.Content justifyContent={['flex-start', 'space-evenly']}>
          <Styled.Wrapper>
            <Heading size="small" as="h2">
              <Link to={`books/${id}`}>{title}</Link>
            </Heading>

            <Heading size="xsmall" as="h3" my="xsmall">
              Author: {authors?.join(', ') || 'Unknown'}
            </Heading>

            <Text my="small" fontSize="small">
              Published: <time>{published || 'Unknown'}</time>
            </Text>
          </Styled.Wrapper>

          <Link to={`books/${id}`}>
            <Button>More info</Button>
          </Link>
        </Styled.Content>
      </Card>
    </Styled.Wrapper>
  );
};

Book.propTypes = {
  srcImg: P.string,
  title: P.string.isRequired,
  authors: P.arrayOf(P.string),
  published: P.string.isRequired,
  id: P.string.isRequired,
};
