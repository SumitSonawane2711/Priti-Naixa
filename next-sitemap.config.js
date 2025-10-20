/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pritinaixa.com', // <-- 🔹 your live site domain (no trailing slash)
  generateRobotsTxt: true,          // generates robots.txt file automatically
  sitemapSize: 7000,
  exclude: ['/admin/*', '/404'],    // optional: exclude admin or error pages
  changefreq: 'weekly',
  priority: 0.7,
  generateIndexSitemap: true,
  transform: async (config, path) => {
    return {
      loc: path, // the path of the page
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : 0.7, // homepage highest priority
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
};
