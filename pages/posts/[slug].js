import { useEffect } from "react";
import Image from "next/image";
// import Head from "next/head";
import parse from "html-react-parser";
import { getSinglePost, getPosts } from "../../lib/posts";
import { transformPostDate } from "../../lib/helpers/dates";
import { readingTime } from "@tryghost/helpers";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

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
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  console.log(post);

  return (
    <>
      <article className="flex flex-col justify-center">
        {post.feature_image && (
          <Image
            src={post.feature_image}
            alt="Article's feature image"
            width={500}
            height={300}
          />
        )}
        <h1 className="text-3xl font-semibold">{post.title}</h1>
        <div className="flex text-center justify-between">
          <p className="text-gray-400 mt-1 mb-0">
            Updated {transformPostDate(post.updated_at)}&nbsp;
          </p>
          <p className="text-gray-400 mt-1 mb-0">
            {readingTime(post, {
              minute: "1 minute read.",
              minutes: "% minute read.",
            })}
          </p>
        </div>
        <div className="mt-2">{parse(post.html)}</div>
      </article>
    </>
  );
};

export default PostPage;