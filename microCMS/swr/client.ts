import useSWR from 'swr';

export const get = <T>(endpoint: string) => {
  const url = `${process.env.CMS_BASE_URL}${endpoint}`;
  return useSWR<T, unknown>(url, getFetcher(url));
};

export const getByContentId = <T>(endpoint: string, contentId: string) => {
  const url = `${process.env.CMS_BASE_URL}${endpoint}/${contentId}`;
  return useSWR<T, unknown>(url, getFetcher(url));
};

const getFetcher = (url: string) => {
  const fetcher = () =>
    fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-API-KEY': process.env.X_API_KEY as string,
      },
    }).then((res) => res.json());

  return fetcher;
};
