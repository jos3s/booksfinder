import { useEffect, useState } from 'react';
import * as Styled from './styles';

import { Bounce } from 'react-rounder/Bounce';

import { getSearch } from './../../api/index';

import { Container } from '../../components/Container';
import { GridCards } from '../../components/GridCards';
import { Heading } from '../../components/Heading';
import { Search } from '../../components/Search';
import { Header } from '../../components/Header';
import undraw_BookLover from '../../assets/undraw_BookLover.svg';
import undraw_BlankCanvas from '../../assets/undraw_BlankCanvas.svg';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const search = async (event) => {
    event.preventDefault();

    if (query.trim() === '') return;

    setLoading(true);
    const newData = await getSearch(query);
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
        <Styled.Container>
          <Bounce color="#607D8B" />
        </Styled.Container>
      ) : (
        <Styled.Result>
          {data.length > 0 && <small>{data.length} results</small>}
          <GridCards cards={data} />
        </Styled.Result>
      )}

      {data?.length === 0 && !loading && (
        <Styled.Container>
          <img src={undraw_BookLover} />
          <p>You haven&apos;t done any research yet.</p>
        </Styled.Container>
      )}

      {data === undefined && (
        <Styled.Container>
          <img src={undraw_BlankCanvas} />
          <p>Your search returned no results...</p>
        </Styled.Container>
      )}
    </Container>
  );
}

export default App;
