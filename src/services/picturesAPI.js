import axios from 'axios';

const API_KEY = '31204543-62c8e31a076b6db5358d79a6b';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPictures = (query, page) => {
  return axios({
    params: {
      q: query,
      key: API_KEY,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: '12',
    },
  });
};
