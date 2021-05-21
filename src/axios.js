import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NEXT_URL + '/api',
});

export default instance;
