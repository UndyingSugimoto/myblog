import { Content } from './../../types/content';
import client from '../client';
import { GetContentsParams } from 'microcms-client/lib/query/get-contents';
import { Filters } from 'microcms-client/lib/util/query-util';

const path = 'contents';

export const getContent = (contentId: string) => {
  return client.getContent<Content>({ path: path, contentId: contentId });
};

export const getContents = () => {
  return client.getContents<Content>({ path: path });
};

export const getContentsByTagsContentId = (tagContentId: string) => {
  const filters: Filters[] = [
    {
      key: 'tags',
      filterType: 'contains',
      value: tagContentId,
    },
  ];

  const param: GetContentsParams = {
    path,
    filters,
  };

  return client.getContents<Content>(param);
};

export const postContent = (content: Content) => {
  client.postContent(path, content);
};
