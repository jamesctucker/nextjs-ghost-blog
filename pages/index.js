import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { getPosts } from '../lib/posts'

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

export default function Home({ posts}) {
  console.log(posts)
  const postList = posts.map(post => {
    return (
      <li key={post.slug}>
        <Link href="posts/[slug]" as={`/posts/${post.slug}`}><a>{post.title}</a></Link>
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
        <h1>Posts</h1>
        <ul>
          {postList}
        </ul>
      </main>
    </div>
  )
}
