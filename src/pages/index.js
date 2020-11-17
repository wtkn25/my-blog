import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: {fields: publishedDate, order: DESC },
        limit: 5
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>blog</h1>
      <ul>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li key={edge.node.slug}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedDate}</p>
            </li>
          )
        })}

      </ul>
    </Layout>
  )
}

export default Home