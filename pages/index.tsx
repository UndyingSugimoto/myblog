import React from 'react';
import Container from '../components/container';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import { getContents } from '../microCMS/axios/query/content';
import { Content } from '../microCMS/types/content';

type Props = {
  allPosts: Content[];
};

const Index: React.FC<Props> = ({ allPosts }) => {
  const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
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
            />
          )}
          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
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
