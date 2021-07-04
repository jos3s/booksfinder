import P from 'prop-types';
import { Heading } from '../Heading';
import { Link } from '../Link';
import * as Styled from './styles';

export const Header = () => {
  return (
    <Styled.Container>
      <Heading>Books finder</Heading>
      <Heading as="h2" size="xsmall">
        by <Link href="https://github.com/jos3s">Jose Ulisses</Link> with{' '}
        <Link href="https://developers.google.com/books/docs/overview">
          Google Books API.
        </Link>
      </Heading>
    </Styled.Container>
  );
};

Header.propTypes = {};
