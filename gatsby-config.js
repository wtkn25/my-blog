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
    title: "いらたわ技術ブログ",
    description: "プログラミングや関連技術の使い方を紹介するブログです"
  },
  plugins: [
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
          'gatsby-remark-prismjs-title',
          'gatsby-remark-prismjs',
          'gatsby-remark-images-contentful'
        ],
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet'
  ],
}
