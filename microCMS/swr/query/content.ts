import { getByContentId } from '../client';
import { Content } from '../../types/content';
import { get } from '../client';

export const getContents = () => {
  const endpoint = '/contents';
  const res = get<Array<Content>>(endpoint);
  return res.data as Array<Content>;
};

export const getContent = (contentId: string) => {
  const endpoint = '/contents';
  const res = getByContentId<Content>(endpoint, contentId);
  return res.data as Content;
};
