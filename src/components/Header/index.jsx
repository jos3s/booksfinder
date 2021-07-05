import P from 'prop-types';
import * as Styled from './styles';
import { Link as RRDLink } from 'react-router-dom';

import { Heading } from '../Heading';
import { Link } from '../Link';

export const Header = () => {
  return (
    <Styled.Container>
      <Heading>
        <RRDLink to="/">Books finder</RRDLink>
      </Heading>
      <Heading as="h2" size="xsmall">
        by <Link link="https://github.com/jos3s">Jose Ulisses</Link> with{' '}
        <Link link="https://developers.google.com/books/docs/overview">
          Google Books API.
        </Link>
      </Heading>
    </Styled.Container>
  );
};

Header.propTypes = {};
