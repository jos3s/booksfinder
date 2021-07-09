import P from 'prop-types';
import * as Styled from './styles';
import { Link as RRDLink } from 'react-router-dom';
import { BsSun, BsMoon } from 'react-icons/bs';

import { useTheme } from '../../hooks/useTheme';
import { Heading } from '../Heading';
import { Button } from '../Button';
import { Link } from '../Link';

export const Header = () => {
  const { toggleTheme, themeTitle } = useTheme();

  return (
    <Styled.Container>
      <Heading>
        <RRDLink to="/">Books finder</RRDLink>

        <Button onClick={toggleTheme} border="none" title="Switch Theme" p="xsmall">
          {themeTitle === 'LightTheme' ? <BsSun size="1.5em" /> : <BsMoon size="1.5em" />}
        </Button>
      </Heading>
      <Heading as="h2" size="xsmall">
        by{' '}
        <Link link="https://github.com/jos3s/booksfinder" color="gray.4">
          Jose Ulisses
        </Link>{' '}
        with{' '}
        <Link link="https://developers.google.com/books/docs/overview" color="gray.4">
          Google Books API.
        </Link>
      </Heading>
    </Styled.Container>
  );
};

Header.propTypes = {};
