import React from 'react';
import PostPreview from './post-preview';
import { Content } from '../microCMS/types/content';

type Props = {
  posts: Content[];
  title?: string;
};

const MoreStories: React.FC<Props> = ({ posts, title = 'Past Articles' }) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.id}
            title={post.title}
            coverImage={post.coverImage.url}
            date={post.createdAt}
            authorName={post.authorName}
            authorImage={post.authorImage.url}
            slug={post.id}
            excerpt={post.excerpt}
            tags={post.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
