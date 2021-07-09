import { useEffect, useState } from 'react';
import * as Styled from './styles';

import { Bounce } from 'react-rounder/Bounce';

import { getSearch } from './../../api/index';

import { Container } from '../../components/Container';
import { GridCards } from '../../components/GridCards';
import { Heading } from '../../components/Heading';
import { Search } from '../../components/Search';
import { Header } from '../../components/Header';
import { Text } from '../../components/Text';
import { Image } from '../../components/Image';
import undraw_BookLover from '../../assets/undraw_BookLover.svg';
import undraw_BlankCanvas from '../../assets/undraw_BlankCanvas.svg';
import config from '../../config';

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

  useEffect(() => {
    document.title = `${config.siteName} | Jos3s`;
  }, []);

  return (
    <Container>
      <Styled.Container
        gridGap="small"
        flexDirection={['column', null, null, 'row']}
        alignItems={['flex-start', null, null, 'center']}
        justifyContent={['space-between']}
        my="xlarge"
        mx="0"
      >
        <Header />
        <Search onSubmit={search} inputValue={query} onChange={setQueryValues} />
      </Styled.Container>

      {loading ? (
        <Styled.Container
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          my="xlarge"
          mx="0"
        >
          <Bounce color="#607D8B" />
        </Styled.Container>
      ) : (
        <Styled.Result>
          {data.length > 0 && <small>{data.length} results</small>}
          <GridCards cards={data} />
        </Styled.Result>
      )}

      {data?.length === 0 && !loading && (
        <Styled.Container
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          my="xlarge"
          mx="0"
        >
          <Image
            src={undraw_BookLover}
            alt="Blank Canvas"
            width="100%"
            maxWidth="35rem"
            height="100%"
            maxHeight="35rem"
            my="medium"
          />
          <Text fontSize="medium" textAlign="center">
            You haven&apos;t done any research yet.
          </Text>
        </Styled.Container>
      )}

      {data === undefined && (
        <Styled.Container
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={undraw_BookLover}
            alt="Blank Canvas"
            width="100%"
            maxWidth="35rem"
            height="100%"
            maxHeight="35rem"
            my="medium"
          />
          <Text fontSize="medium" textAlign="center">
            Your search returned no results...
          </Text>
        </Styled.Container>
      )}
    </Container>
  );
}

export default App;
