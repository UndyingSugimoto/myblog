import { Tag } from './tag';

export type Content = {
  title: string;
  content: string;
  tags: Tag[];
  excerpt: string;
  authorName: string;
  authorImage: { url: string };
  coverImage: { url: string };
};
