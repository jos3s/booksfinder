import { useState } from 'react';
import * as Styled from './styles';

import { Bounce } from 'react-rounder/Bounce';

import { getApi } from './../../api/index';

import { Container } from '../../components/Container';
import { GridCards } from '../../components/GridCards';
import { Heading } from '../../components/Heading';
import { Search } from '../../components/Search';
import { Link } from '../../components/Link';
import { Header } from '../../components/Header';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const search = async (event) => {
    event.preventDefault();

    if (query.trim() === '') return;

    setLoading(true);
    const newData = await getApi(query);
    setData(newData);
    setLoading(false);
  };

  const setQueryValues = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Container>
      <Styled.Header>
        <Header />
        <Search onSubmit={search} inputValue={query} onChange={setQueryValues} />
      </Styled.Header>
      {loading ? (
        <Styled.Load>
          <Bounce color="#4d4d4d" />{' '}
        </Styled.Load>
      ) : (
        <GridCards cards={data} />
      )}
    </Container>
  );
}

export default App;
