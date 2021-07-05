import { getPosts } from '../../lib/posts'
import Link from 'next/link'

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


export default function allPosts({posts}) {
    const postList = posts.map(post => {
        return (
            <li key={post.id}>        
                <Link href="/writing/[slug]" as={`/writing/${post.slug}`}><a>{post.title}</a></Link>
            </li>
        )
    })

    return (
        <ul>
            {postList}
        </ul>
    )
}