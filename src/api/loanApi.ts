import axios from 'axios';

export const loanApi = axios.create({
  baseURL: 'http://127.0.0.1:5000/api',
});