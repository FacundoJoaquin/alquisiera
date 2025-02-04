/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://alquisiera.vercel.app',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://alquisiera.vercel.app/server-sitemap.xml',
      ],
    },
    changefreq: 'daily',
    priority: 0.7,
  }