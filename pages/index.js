import Head from "next/head";
import Link from "next/link";
import { getRecentPosts, getFeaturedPosts } from "../lib/posts";

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
      </li>
    );
  });

  const recentPostsList = recentPosts.map((post) => {
    return (
      <li key={post.slug}>
        <Link href="writing/[slug]" as={`/writing/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
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
        <section>
          <p>
            Hey, I'm James. Welcome to my online home! I'm a husband, dog dad,
            and software engineer located in Minneapolis.
          </p>
          <p>
            I'm currently building out a federal R&D tax credits platform at{" "}
            <a href="https://mainstreet.com">MainStreet</a>. Previously, I
            helped create the foundational software for{" "}
            <a href="https://soona.co">soona</a>, another Series A-raising
            startup.
          </p>
        </section>
        <h2>Featured Posts</h2>
        <section>
          <ul>{featuredPostsList}</ul>
        </section>
        <h2>Recent Posts</h2>
        <section>
          <ul>{recentPostsList}</ul>
        </section>
      </main>
    </div>
  );
}
