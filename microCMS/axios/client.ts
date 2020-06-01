import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: process.env.CMS_BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'X-API-KEY': `${process.env.X_API_KEY as string}`,
  },
};

export default axios.create(config);
