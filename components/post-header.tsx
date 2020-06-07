import React from 'react';
import Avatar from './avatar';
import DateFormater from './date-formater';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import { Tag } from '../microCMS/types/tag';
import TagTiles from './tag-tiles';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  authorName: string;
  authorImage: string;
  tags: Tag[];
};

const PostHeader: React.FC<Props> = ({
  title,
  coverImage,
  date,
  authorName,
  authorImage,
  tags,
}) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-10">
        <Avatar name={authorName} picture={authorImage} />
      </div>
      <div className="mb-4">
        <TagTiles tags={tags}></TagTiles>
      </div>
      <div className="mb-8 md:mb-8">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={authorName} picture={authorImage} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormater dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
