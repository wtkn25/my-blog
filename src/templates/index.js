import React from 'react';
import { Link, graphql } from 'gatsby'
import styled from 'styled-components';
import SEO from '../components/SEO';

import Layout from '../components/layout';
import Pagination from '../components/pagination';

const BlogIndex = (props) => {
  return (
    <div>
      <SEO />
      <Layout>
        <h1>新着記事</h1>
        <PostUl>
          {props.data.allContentfulBlogPost.edges.map((edge) => {
            return (
              <PostLink key={edge.node.slug} to={`/${edge.node.slug}`}>
                <PostLi>
                  <h2>{edge.node.title}</h2>
                  <PostPublishedData>{edge.node.publishedDate}</PostPublishedData>
                </PostLi>
              </PostLink>
            )
          })}
        </PostUl>
        <Pagination props={props}></Pagination>
        {/* <Link to={props.pageContext.previousPagePath}>Previous</Link>
        <Link to={props.pageContext.nextPagePath}>Next</Link> */}
      </Layout>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { fields: publishedDate, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "YYYY年MM月D日")
        }
      }
    }
  }
`

const PostUl = styled.ul`
  list-style: none;
  padding: 0;
`

const PostLi = styled.li`
  background-color: #eee;
  padding: 1rem 3rem;
  margin-bottom: 1rem;
  text-decoration: none;
  border-radius: 15px;
  &:hover {
    background-color: #ddd;
  }
`

const PostLink = styled(Link)`
  color: #000;
  text-decoration: none;
`

const PostPublishedData = styled.p`
  font-style: italic;
  color: #555;
`