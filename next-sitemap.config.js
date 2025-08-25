/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jan-manofim.co.il',
  generateRobotsTxt: true,
  sitemapSize: 1000,
  changefreq: 'weekly',
  priority: 0.7,

  transform: async (config, path) => {
    if (path === '/') {
      return {
        loc: '/',
        changefreq: 'weekly',
        priority: 1.0,      // homepage gets the crown
        lastmod: new Date().toISOString(),
      };
    }
    if (path === '/terms-of-service') {
      return {
        loc: path,
        changefreq: 'yearly',
        priority: 0.3,      // index it, but keep it low
        lastmod: new Date().toISOString(),
      };
    }
    return null;            // drop everything else
  },

  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  exclude: ['/api/*', '/404', '/500', '/server-sitemap.xml'],
};
