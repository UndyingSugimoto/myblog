import React from 'react';
import Avatar from './avatar';
import DateFormater from './date-formater';
import CoverImage from './cover-image';
import Link from 'next/link';
import TagTiles from './tag-tiles';
import { Tag } from '../microCMS/types/tag';

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

const HeroPost: React.FC<Props> = ({
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
    <section>
      <div className="mb-8 md:mb-8">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div>
        <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
      </div>
      <div className="mb-4">
        <TagTiles tags={tags} />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormater dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={authorName} picture={authorImage} />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
