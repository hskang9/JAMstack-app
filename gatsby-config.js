require('dotenv').config({
  path: `.env`,
});

const queries = [];

module.exports = {
  siteMetadata: {
    title: `Launchpad`,
    titleTemplate: `%s: 국내외 스니커즈 래플 및 발매 소식을 모두 한곳에`,
    description: `런치패드는 당신의 패션을 위한 큐레이션 검색 엔진입니다.`,
    url: `https://launchpad.fyi`,
    image: '/seo.png',
    author: 'Hyungsuk Kang',
    twitterUsername: '@launchpad',
    keywords: ['raffle', 'release', '래플', '릴리즈', '스니커즈'],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-firebase',
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
        },
        loginPath: '/',
        loginRedirectPath: '/',
        socialLogins: ['google', 'twitter', 'facebook', 'github'],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/vectors`, // See below to configure properly
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Launchpad`,
        short_name: `런치패드`,
        start_url: `/`,
        background_color: `#202020`,
        theme_color: `#202020`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: process.env.GOOGLE_ADSENSE_PUB_ID,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-161606383-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    'gatsby-plugin-emotion',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
