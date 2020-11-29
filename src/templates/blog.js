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
        description={post.body.childMarkdownRemark.excerpt}
      />
      <Layout>
        <h1>{post.title}</h1>
        <p>{post.publishedDate}</p>
        <Hr />
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
      publishedDate(formatString: "YYYY年MM月D日")
      body {
        childMarkdownRemark {
          html
          excerpt(format: PLAIN)
        }
      }
    }
  } `

const Wrapper = styled.div`
`

const Hr = styled.hr`
  margin-bottom: 3rem;
`