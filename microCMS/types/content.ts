import { Tag } from './tag';
import { Data } from './common/data';

export type Content = {
  title: string;
  content: string;
  tags: Tag[];
} & Data;
