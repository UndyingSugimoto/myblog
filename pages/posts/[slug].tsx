import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import Layout from '../../components/layout';
import PostTitle from '../../components/post-title';
import { Content } from '../../microCMS/types/content';
import marked from '../../lib/marked';
import { getContent, getContents } from '../../microCMS/myclient/query/content';
import { Data } from 'microcms-client/lib/types/data';
import Head from 'next/head';

type Props = {
  post: Content & Data;
  morePosts: Content[];
  preview?: boolean;
};

const Post: React.FC<Props> = ({ post, preview }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />;
  }
  const descrption = post.tags
    .map((tag) => {
      return tag.tagName;
    })
    .join(' | ');

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {'Blog/'}
                  {post.title}
                </title>
                <meta property="og:image" content={post.coverImage.url} />
                <meta name="descrpition" content={descrption}></meta>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={descrption} />
                <meta name="twitter:image" content={post.coverImage.url}></meta>
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage.url}
                date={post.updatedAt}
                authorName={post.authorName}
                authorImage={post.authorImage.url}
                tags={post.tags}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = await getContent(params.slug);
  const content = marked(post.content);

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getContents();

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.id,
        },
      };
    }),
    fallback: false,
  };
}
