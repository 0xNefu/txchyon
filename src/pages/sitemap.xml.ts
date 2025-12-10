import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    return new Response('Sitemap generation failed: Site URL is not set in astro.config.mjs', { status: 500 });
  }
  
  // 1. Fetch all blog posts
  const blogPosts = await getCollection('blog');

  // 2. Map blog posts to sitemap URL entries
  const postsMap = blogPosts
    .map((post) => {
      const lastModDate = post.data.updatedDate ?? post.data.pubDate;
      const lastMod = lastModDate ? new Date(lastModDate).toISOString() : new Date().toISOString();

      return `
        <url>
          <loc>${new URL(`/blog/${post.slug}`, site).href}</loc>
          <lastmod>${lastMod}</lastmod>
          <priority>0.8</priority>
          <changefreq>monthly</changefreq>
        </url>
      `;
    })
    .join('\n');

  // 3. Define ONLY your existing static pages
  const staticUrls = [
    { 
      loc: site.href, // Homepage
      priority: 1.0, 
      changefreq: 'daily',
      lastmod: new Date().toISOString()
    },
    { 
      loc: new URL('/about', site).href, 
      priority: 0.7, 
      changefreq: 'monthly',
      lastmod: new Date().toISOString()
    },
    { 
      loc: new URL('/tools', site).href,
      priority: 0.8, 
      changefreq: 'weekly',
      lastmod: new Date().toISOString()
    },
    { 
      loc: new URL('/contact', site).href,
      priority: 0.6, 
      changefreq: 'yearly',
      lastmod: new Date().toISOString()
    },
    // NO /blog page here since it 404s!
    // NO /search, /rss-debug, or /404 pages
  ];

  const staticUrlsMap = staticUrls
    .map((item) => `
      <url>
        <loc>${item.loc}</loc>
        <lastmod>${item.lastmod}</lastmod>
        <priority>${item.priority}</priority>
        <changefreq>${item.changefreq}</changefreq>
      </url>
    `)
    .join('\n');

  // 4. Construct the full XML content
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrlsMap}
  ${postsMap}
</urlset>`.trim();

  return new Response(xmlContent, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};