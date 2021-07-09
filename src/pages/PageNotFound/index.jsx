import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as Styled from './styles';

import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Text } from '../../components/Text';

import undraw_PageNotFound from '../../assets/undraw_PageNotFound.svg';
import { Image } from '../../components/Image';

function PageNotFound() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 5000);
  }, [history]);

  return (
    <Container>
      <Header />

      <Styled.Container>
        <Image
          src={undraw_PageNotFound}
          alt="Page not found"
          width="100%"
          height="100%"
          my="huge"
        />
        <Text fontSize="medium" textAlign="center">
          Page not found. Redirecting you for home.
        </Text>
      </Styled.Container>
    </Container>
  );
}

export default PageNotFound;
