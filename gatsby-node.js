const path = require(`path`)
const { paginate } = require("gatsby-awesome-pagination")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(`
    query {
      allContentfulBlogPost(
        sort: {fields: publishedDate, order: DESC }
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/${edge.node.slug}/`,
      context: {
        slug: edge.node.slug
      }
    })
  })

  const posts = res.data.allContentfulBlogPost.edges
  const pageTemplate = path.resolve('src/templates/index.js')
  paginate({
    createPage,
    items: posts,
    itemsPerPage: 10,
    component: pageTemplate,
    pathPrefix: ({ pageNumber }) => pageNumber === 0 ? '/' : '/page'
  })
}