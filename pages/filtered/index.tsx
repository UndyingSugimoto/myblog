import React from 'react';
import { Content } from '../../microCMS/types/content';
import { Tag } from '../../microCMS/types/tag';
import MoreStories from '../../components/more-stories';
import { GetServerSideProps } from 'next';
import Container from '../../components/container';
import { getTag } from '../../microCMS/axios/query/tag';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { getContentsByTagsContentId } from '../../microCMS/myclient/query/content';
import { Data } from 'microcms-client/lib/types/data';
import TagTile from '../../components/tag-tile';

type Props = {
  posts: (Content & Data)[];
  tag: Tag;
};

const Filtered: React.FC<Props> = ({ posts, tag }) => {
  return (
    <Layout>
      <Container>
        <Header />
        <div className="flex flex-wrap rounded-lg bg-gray-400 h-20 w-auto p-5 mt-3 ">
          <TagTile tag={tag}></TagTile>
        </div>
        <MoreStories posts={posts} title={''}></MoreStories>
      </Container>
    </Layout>
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
