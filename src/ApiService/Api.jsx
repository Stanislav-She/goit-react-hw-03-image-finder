import { queries } from '@testing-library/react';
import axios from 'axios';

const USER_API_KEY = '33148829-cc4d08839fd1b6c92d312a1a4';

const searchParams = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: USER_API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const getImage = async (queries, page = 1) => {
  const { data } = await searchParams.get('', {
    params: {
      q: queries,
      page,
    },
  });

  return data.hits;
};
