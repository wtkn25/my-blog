import React from 'react';
import { graphql } from 'gatsby'
import styled from 'styled-components';

import Layout from '../components/layout'
import SEO from '../components/SEO';
import PublishedDate from '../components/publishedDate';

const BlogPost = (props) => {
  const post = props.data.contentfulBlogPost
  return (
    <Wrapper>
      <SEO
        title={post.title}
        description={post.body.childMarkdownRemark.excerpt}
      />
      <Layout>
        <PublishedDate props={post.publishedDate} />
        <h1>{post.title}</h1>
        <Hr />
        <PostContent dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
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

const PostContent = styled.div`
  > h2 {
    margin-top: 4rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid #ddd;
    padding-bottom: .2rem;
    font-size: 1.5rem;
  }

  > h3 {
    margin-top: 3rem;
    margin-bottom: 1rem;
    padding-bottom: .2rem;
    font-size: 1.4rem;
  }

  > h4 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    padding-bottom: .2rem;
    font-size: 1.2rem;
  }

  > h2 {
    /* font-size: 2rem; */
    /* border-bottom: 1px solid #EEE; */
  }
`