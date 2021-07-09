import { useCallback, useEffect, useState } from 'react';
import * as Styled from './styles';
import { Link, useParams } from 'react-router-dom';

import { Bounce } from 'react-rounder/Bounce';

import { getBook } from '../../api';

import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';
import { Text } from '../../components/Text';
import { Image } from '../../components/Image';
import undraw_BlankCanvas from '../../assets/undraw_BlankCanvas.svg';
import config from '../../config';

export const Book = () => {
  const [book, setBook] = useState({});
  const [status, setStatus] = useState('');
  const params = useParams();

  const loadData = useCallback(async () => {
    try {
      setStatus('loading');
      const data = await getBook(params.id);
      setBook(data);
      setStatus('success');
    } catch (e) {
      setStatus('error');
    }
  }, [params]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    if (book.title) document.title = `${book.title} | ${config.siteName} `;
  }, [book]);

  const {
    title,
    authors,
    description,
    srcImg,
    published,
    publisher,
    language,
    categories,
    averageRating,
  } = book;

  return (
    <Container>
      <Header />
      {!status && !book.title && (
        <Styled.Container
          mt="medium"
          my="4rem"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image src={undraw_BlankCanvas} alt="Blank Canvas" width="100%" height="100%" />
          <Text fontSize="large" textAlign="center">
            Could not find this book.
          </Text>
          <Text fontSize="medium">
            Go back to the <Link to="/"> home page.</Link>
          </Text>
        </Styled.Container>
      )}

      {status === 'loading' && (
        <Styled.Container
          mt="huge"
          mx="auto"
          gridGap="small"
          alignItems="center"
          justifyContent="center"
        >
          <Bounce color="#607D8B" />
        </Styled.Container>
      )}

      {status === 'success' && (
        <Styled.Container
          mt="medium"
          gridGap="small"
          flexDirection={['column', null, null, 'row']}
          justifyContent="space-around"
          alignItems={['center', null, null, 'flex-start']}
        >
          <Card
            className="image"
            height={['100%', null, null, '500px']}
            maxWidth={['300px', null, null, '360px']}
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={srcImg}
              alt={title}
              height={['400px', null, null, '100%']}
              borderRadius="sm"
            />
          </Card>

          <Card
            className="content"
            p="medium"
            gridGap="large"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Styled.Main
              gridGap="medium"
              flexDirection="column"
              justifyContent="flex-start"
            >
              <Styled.Title gridGap="small" flexDirection="column">
                <Heading as="h2" size="big">
                  {title || 'No title'}
                </Heading>
                <Heading as="h3" size="small">
                  {authors?.join(', ') || 'Unknown'}
                </Heading>
                <Badge title="Language" width="8rem">
                  {language}
                </Badge>
              </Styled.Title>

              <Styled.Description>
                <small>Description:</small>
                <section dangerouslySetInnerHTML={{ __html: description || 'Unknown' }} />
              </Styled.Description>

              <Styled.PublishedInfo>
                <small>Publisher and Published Date:</small>
                <div>
                  <Text>{publisher || 'Unknown'}</Text>
                  <Badge variant="outline">
                    <time>{published || 'Unknown'}</time>
                  </Badge>
                </div>
              </Styled.PublishedInfo>

              <Styled.Rating>
                <small>Average Rating:</small>
                <Text mt="0.8rem">{averageRating || 'No rating found'}</Text>
              </Styled.Rating>
            </Styled.Main>

            <Styled.Footer>
              <small>Categories:</small>
              <Text mt="0.8rem">{categories?.join(', ') || 'Unknown'}</Text>
            </Styled.Footer>
          </Card>
        </Styled.Container>
      )}

      {status === 'error' && (
        <Styled.Container
          mt="medium"
          my="4rem"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src={undraw_BlankCanvas} alt="Black Canvas" width="100%" height="100%" />
          <Text textAlign="center" fontSize="large">
            Could not find this book
          </Text>
          <Text fontSize="medium">
            Go back to the <Link to="/"> home page.</Link>
          </Text>
        </Styled.Container>
      )}
    </Container>
  );
};
