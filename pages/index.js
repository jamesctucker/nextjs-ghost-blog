import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { getRecentPosts, getFeaturedPosts } from '../lib/posts'

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
      featuredPosts
    },
  };
};

export default function Home({ featuredPosts, recentPosts }) {
  const featuredPostsList = featuredPosts.map(post => {
    return (
      <li key={post.slug}>
        <Link href="posts/[slug]" as={`/posts/${post.slug}`}><a>{post.title}</a></Link>
      </li>
    )
  })

  const recentPostsList = recentPosts.map(post => {
    return (
      <li key={post.slug}>
        <Link href="writing/[slug]" as={`/writing/${post.slug}`}><a>{post.title}</a></Link>
      </li>
    )
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>James Tucker</title>
        <meta name="description" content="The online home of James C. Tucker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>Featured Posts</h2>
          {featuredPostsList}
        <h2>Recent Posts</h2>
        <ul>
          {recentPostsList}
        </ul>
      </main>
    </div>
  )
}
