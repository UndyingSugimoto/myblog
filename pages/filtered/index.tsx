import React from 'react';
import { Content } from '../../microCMS/types/content';
import { Tag } from '../../microCMS/types/tag';
import MoreStories from '../../components/more-stories';
import TagTiles from '../../components/tag-tiles';
import { getContentsByTagsContentId } from '../../microCMS/axios/query/content';
import { GetServerSideProps } from 'next';
import Container from '../../components/container';
import { getTag } from '../../microCMS/axios/query/tag';
import Header from '../../components/header';

type Props = {
  posts: Content[];
  tag: Tag;
};

const Filtered: React.FC<Props> = ({ posts, tag }) => {
  return (
    <>
      <Container>
        <Header />
        <div className="flex flex-wrap rounded-lg bg-gray-400 h-20 w-auto p-5 mt-3 ">
          <TagTiles tags={[tag]}></TagTiles>
        </div>
        <MoreStories posts={posts} title={''}></MoreStories>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const id: string = context.query['tagsContentId'] as string;

  const contents = await getContentsByTagsContentId(id);
  const tag = await getTag(id);

  return {
    props: { posts: contents, tag },
  };
};

export default Filtered;
