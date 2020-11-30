/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "watakn tech",
    description: "プログラミングや関連技術の使い方を紹介するブログです",
    siteUrl: process.env.SITE_URL
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) => `https://www.youtube.com/embed/${videoId}`,
                }
              ]
            }
          },
          'gatsby-remark-prismjs-title',
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images-contentful',
            options: {
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-images-zoom',
            options: {
              background: '#000'
            },
          },
          'gatsby-remark-responsive-iframe',
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank"
            }
          }
        ],
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap'
  ],
}
