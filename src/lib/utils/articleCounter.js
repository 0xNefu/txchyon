// src/lib/utils/articleCounter.js
import { getCollection } from "astro:content";

export async function getArticleCount() {
  try {
    const posts = await getCollection("posts");
    return posts.length;
  } catch (error) {
    console.error("Error counting articles:", error);
    return 0;
  }
}
