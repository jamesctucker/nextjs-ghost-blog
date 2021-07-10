import { api } from "./api";

export async function getPosts() {
  let posts = await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });

  return posts;
}

export async function getRecentPosts() {
  let posts = await api.posts
    .browse({
      limit: 5,
    })
    .catch((err) => {
      console.error(err);
    });

  return posts;
}

export async function getFeaturedPosts() {
  let posts = await api.posts
    .browse({
      limit: 3,
      filter: "featured:true",
    })
    .catch((err) => {
      console.error(err);
    });

  return posts;
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}

// export async function getPostsByTag(tagName) {
//   let posts = await api.posts.browse({
//     filter: `tag:${tagName}`,
//   });

//   return posts;
// }
