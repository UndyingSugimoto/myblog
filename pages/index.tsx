import React from 'react';
import Container from '../components/container';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import MoreStories from '../components/more-stories';
import { Content } from '../microCMS/types/content';
import { getContents } from '../microCMS/myclient/query/content';
import { Data } from 'microcms-client/lib/types/data';
import Head from 'next/head';
import { AUTHOR_NAME } from '../lib/constants';

type Props = {
  allPosts: (Content & Data)[];
};

const Index: React.FC<Props> = ({ allPosts }) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>{`${AUTHOR_NAME}`}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage.url}
              date={heroPost.createdAt}
              authorName={heroPost.authorName}
              authorImage={heroPost.authorImage.url}
              slug={heroPost.id}
              excerpt={heroPost.excerpt}
              tags={heroPost.tags}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = await getContents();

  return {
    props: { allPosts },
  };
};
