const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Kelok - Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Kelok', // Alternative Site title for SEO
  siteTitleShort: 'Kelok', // short_name for manifest
  siteHeadline: 'Welcome!', // Headline for schema.org JSONLD
  siteUrl: 'https://kelokchan.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Developed using Gatsby',
  author: 'LekoArts', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@kelokchan', // Twitter Username
  ogSiteName: 'kelokchan', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-103036181-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
