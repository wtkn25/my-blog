import React from 'react';
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const BlogPost = (props) => {
  const post = props.data.contentfulBlogPost
  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.publishedDate}</p>
      <div dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
    </Layout >

  )
}

export default BlogPost

export const query = graphql`
  query ($slug: String!){
    contentfulBlogPost(
      slug: {eq: $slug}
    ) {
      title
      publishedDate
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  } `