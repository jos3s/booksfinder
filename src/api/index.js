import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
});

export const getApi = async (query) => {
  const {
    data: { items },
  } = await api.get(query);

  const dataFormat = items.map((item) => {
    return {
      id: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      publisher: item.volumeInfo.publisher,
      published: item.volumeInfo.publishedDate,
      srcImg: item.volumeInfo.imageLinks?.thumbnail,
      language: item.volumeInfo.language,
    };
  });
  return dataFormat;
};
