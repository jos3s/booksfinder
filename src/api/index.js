import axios from 'axios';

const imageBackup = 'https://books.google.com.br/googlebooks/images/no_cover_thumb.gif';

export const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes',
});

export const getSearch = async (query) => {
  const {
    data: { items },
  } = await api.get('?q=' + query);

  const dataFormat = items?.map((item) => {
    return {
      id: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      published: item.volumeInfo.publishedDate,
      srcImg: item.volumeInfo.imageLinks?.thumbnail || imageBackup,
    };
  });
  return dataFormat;
};

export const getBook = async (id) => {
  const { data } = await api.get(id);
  const dataFormat = {
    id: data?.id,
    title: data?.volumeInfo.title,
    authors: data?.volumeInfo.authors,
    description: data?.volumeInfo.description,
    published: data?.volumeInfo.publishedDate,
    publisher: data?.volumeInfo.publisher,
    srcImg:
      data.volumeInfo.imageLinks?.thumbnail ||
      data.volumeInfo.imageLinks?.medium ||
      imageBackup,
    categories: data?.volumeInfo.categories,
    averageRating: data?.volumeInfo.averageRating,
    language: data?.volumeInfo.language,
  };
  return dataFormat;
};
