import axios from 'axios';

const url = 'https://gutendex.com';

export const instance = axios.create({
  baseURL: url,
});