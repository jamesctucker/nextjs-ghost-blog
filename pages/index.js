/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import { getRecentPosts, getFeaturedPosts } from "../lib/posts";
import { transformPostDate } from "../lib/helpers/dates";

export const getStaticProps = async () => {
  const recentPosts = await getRecentPosts();
  const featuredPosts = await getFeaturedPosts();

  if (!recentPosts) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      recentPosts,
      featuredPosts,
    },
  };
};

export default function Home({ featuredPosts, recentPosts }) {
  const featuredPostsList = featuredPosts.map((post) => {
    return (
      <li key={post.slug}>
        <Link href="posts/[slug]" as={`/posts/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
        {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
        {post.updated_at && (
          <p className="post-updated">{transformPostDate(post.updated_at)}</p>
        )}
      </li>
    );
  });

  const recentPostsList = recentPosts.map((post) => {
    return (
      <li key={post.slug}>
        <Link href="posts/[slug]" as={`/posts/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
        {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
        {post.updated_at && (
          <p className="post-updated">{transformPostDate(post.updated_at)}</p>
        )}
      </li>
    );
  });
  return (
    <div>
      <Head>
        <title>James Tucker</title>
        <meta name="description" content="The online home of James C. Tucker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="text-xl">
          <p>
            Hey, I'm James. Welcome to my online home! I'm a husband, dog dad,
            and software engineer located in Minneapolis.
          </p>
          <p>
            I'm currently building out a platform that helps small businesses at{" "}
            <a href="https://mainstreet.com">MainStreet</a>. Previously, I
            helped create the foundational software for{" "}
            <a href="https://soona.co">soona</a>, another Series-A-raising
            startup.
          </p>
          <p>
            I love building things and sharing what I've learned. And coming
            from a non-traditional background myself, I'm passionate about
            helping other get into this space. Some of the things I write about
            include JavaScript, React, Vue, entrepreneurship, and career growth.
          </p>
          <Link href="/about">
            <a className="bg-blue-500 text-white text-base hover:bg-blue-700 hover:text-white rounded py-2 px-4">
              Learn more about me
            </a>
          </Link>
        </section>
        <h2 className="mt-8">Featured Posts</h2>
        <section>
          <ul>{featuredPostsList}</ul>
        </section>
        <h2 className="mt-8">Recent Posts</h2>
        <section>
          <ul>{recentPostsList}</ul>
        </section>
      </main>
    </div>
  );
}
