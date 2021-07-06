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
        <Styled.ContainerNotFound>
          <img src={undraw_BlankCanvas} />
          <p>Could not find this book.</p>
          <p>
            Go back to the <Link to="/"> home page.</Link>
          </p>
        </Styled.ContainerNotFound>
      )}

      {status === 'loading' && (
        <Styled.Container>
          <Bounce color="#607D8B" />
        </Styled.Container>
      )}

      {status === 'success' && (
        <Styled.Container>
          <Card className="image">
            <img src={srcImg} alt={title} />
          </Card>
          <Card column className="content">
            <Styled.Main>
              <Styled.Title>
                <Heading as="h2" size="big">
                  {title || 'No title'}
                </Heading>
                <Heading as="h3" size="small">
                  {authors?.join(', ') || 'Unknown'}
                </Heading>
                <Badge title="Language">{language}</Badge>
              </Styled.Title>

              <Styled.Description>
                <small>Description:</small>
                <section dangerouslySetInnerHTML={{ __html: description || 'Unknown' }} />
              </Styled.Description>

              <Styled.PublishedInfo>
                <small>Publisher and Published Date:</small>
                <div>
                  <p>{publisher || 'Unknown'}</p>
                  <Badge variant="outline">
                    <time>{published || 'Unknown'}</time>
                  </Badge>
                </div>
              </Styled.PublishedInfo>

              <Styled.Rating>
                <small>Average Rating:</small>
                <p>{averageRating || 'No rating found'}</p>
              </Styled.Rating>
            </Styled.Main>

            <Styled.Footer>
              <small>Categories:</small>
              <p>{categories?.join(', ') || 'Unknown'}</p>
            </Styled.Footer>
          </Card>
        </Styled.Container>
      )}

      {status === 'error' && (
        <Styled.ContainerNotFound>
          <img src={undraw_BlankCanvas} alt="Black Canvas" />
          <Heading as="h2" size="big">
            Could not find this book
          </Heading>
        </Styled.ContainerNotFound>
      )}
    </Container>
  );
};
