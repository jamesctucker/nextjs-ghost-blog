import { getPosts } from "../../lib/posts";
import Link from "next/link";
import Head from "next/head";
import { transformPostDate } from "../../lib/helpers/dates";
// import { getAllTags } from "../../lib/tags";

export const getStaticProps = async () => {
  const posts = await getPosts();
  // const tags = await getAllTags();

  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts,
      // tags,
    },
  };
};

export default function allPosts({ posts }) {
  const postList = posts.map((post) => {
    return (
      <li key={post.id} className="flex">
        <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
        <p className="text-gray-500 italic ml-2 my-0 mr-0">
          {transformPostDate(post.updated_at)}
        </p>
      </li>
    );
  });

  return (
    <div>
      <Head>
        <title>Posts</title>
        <meta name="posts" content="James' articles and notes" />
      </Head>
      <h1>Posts</h1>
      <ul>{postList}</ul>
    </div>
  );
}
