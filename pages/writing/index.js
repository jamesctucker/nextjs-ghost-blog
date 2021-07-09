import { getPosts } from "../../lib/posts";
import Link from "next/link";
import Head from "next/head";

export const getStaticProps = async () => {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts,
    },
  };
};

export default function allPosts({ posts }) {
  const postList = posts.map((post) => {
    return (
      <li key={post.id}>
        <Link href="/writing/[slug]" as={`/writing/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    );
  });

  return (
    <div>
      <Head>
        <title>Writing</title>
        <meta name="writing" content="James' articles and notes" />
      </Head>
      <ul>{postList}</ul>
    </div>
  );
}
