import GhostContentAPI from "@tryghost/content-api";

export const api = new GhostContentAPI({
  url: process.env.GHOST_BLOG_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: "v3",
});
