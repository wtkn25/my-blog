import React from 'react';
import { graphql } from 'gatsby'
import styled from 'styled-components';

import Layout from '../components/layout'
import SEO from '../components/SEO';


const BlogPost = (props) => {
  const post = props.data.contentfulBlogPost
  return (
    <Wrapper>
      <SEO
        title={post.title}
      />
      <Layout>
        <h1>{post.title}</h1>
        <p>{post.publishedDate}</p>
        <div dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
      </Layout >
    </Wrapper>
  )
}

export default BlogPost

export const query = graphql`
  query ($slug: String!){
    contentfulBlogPost(
      slug: {eq: $slug}
    ) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  } `

const Wrapper = styled.div`
  max-width: 980px;
  margin: 0 auto;
`