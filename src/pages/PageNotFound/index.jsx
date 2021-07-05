import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as Styled from './styles';

import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import undraw_PageNotFound from '../../assets/undraw_PageNotFound.svg';

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
        <img src={undraw_PageNotFound} alt="Page not found" />
        <Heading as="h2" size="small">
          Page not found. Redirecting you for home.
        </Heading>
      </Styled.Container>
    </Container>
  );
}

export default PageNotFound;
