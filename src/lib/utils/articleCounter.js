// src/lib/utils/articleCounter.js
import { getCollection } from "astro:content";

export async function getArticleCount() {
  try {
    const posts = await getCollection("posts", ({ data }) => {
      // Only count posts that are explicitly published
      // This ignores draft: true and any post without a draft field
      return data.draft !== true;
      // If you want to be extra strict and only count explicit draft: false:
      // return data.draft === false;
    });

    return posts.length;
  } catch (error) {
    console.error("Error counting articles:", error);
    return 0;
  }
}