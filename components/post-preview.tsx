import React from 'react';
import Avatar from './avatar';
import DateFormater from './date-formater';
import CoverImage from './cover-image';
import Link from 'next/link';
import { Tag } from '../microCMS/types/tag';
import TagTiles from './tag-tiles';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  authorName: string;
  authorImage: string;
  slug: string;
  tags: Tag[];
};

const PostPreview: React.FC<Props> = ({
  title,
  coverImage,
  date,
  excerpt,
  authorName,
  authorImage,
  slug,
  tags,
}) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <TagTiles tags={tags} />
      <div className="text-lg mb-4 mt-4 flex">
        <DateFormater dateString={date} />
        <p className="text-lg leading-relaxed ml-3">{excerpt}</p>
      </div>
      <Avatar name={authorName} picture={authorImage} />
    </div>
  );
};

export default PostPreview;
