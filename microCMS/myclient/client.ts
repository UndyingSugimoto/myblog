import { createClient } from 'microcms-client/lib/client';

export default createClient({
  baseUrl: process.env.CMS_BASE_URL as string,
  contentType: 'application/json; charset=utf-8',
  X_API_KEY: `${process.env.X_API_KEY as string}`,
});
