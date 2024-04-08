import axios from 'axios';

export const loanApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
