import Image from "next/image";
import parse from "html-react-parser";
import { getSinglePost, getPosts } from "../../lib/posts";

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}

const PostPage = ({ post }) => {
  return (
    <article>
      <Image
        src={post.feature_image}
        alt="Article's feature image"
        width={500}
        height={300}
      />
      <h1 className="text-3xl font-semibold">{post.title}</h1>
      <p>{post.published_at}</p>
      <p>
        {post.reading_time} {post.reading_time > 1 ? `minutes` : `minute`}
      </p>
      <div>{parse(post.html)}</div>
    </article>
  );
};

export default PostPage;
