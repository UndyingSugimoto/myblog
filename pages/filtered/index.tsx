import React from 'react';
import { Content } from '../../microCMS/types/content';
import { Tag } from '../../microCMS/types/tag';
import MoreStories from '../../components/more-stories';
import TagTiles from '../../components/tag-tiles';
import { getContents } from '../../microCMS/axios/query/content';
import { GetServerSideProps } from 'next';
import Container from '../../components/container';

type Props = {
  posts: Content[];
  tags: Tag[];
};

const Filtered: React.FC<Props> = ({ posts, tags }) => {
  return (
    <>
      <Container>
        <div className="flex flex-wrap rounded-lg bg-gray-400 h-20 w-auto p-5 mt-3 ">
          <TagTiles tags={tags}></TagTiles>
        </div>
        <MoreStories
          posts={posts}
          title={`Filtered by ${tags.map((tag) => tag.tagName).join(',')} `}
        ></MoreStories>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  // const name = context.params?.tagIds;
  console.log('name :');
  console.log(context.query);

  // TODO ここでタグでフィルタリングされたコンテンツを取得する
  const posts = await getContents();
  // TODO not impl yet
  // const tags = await getTags();

  return {
    props: { posts: posts, tags: [{ tagId: 'id', tagName: 'name' }] },
  };
};

export default Filtered;
