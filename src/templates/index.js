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
        <PostUl>
          <PostLiStartBorder />
          {props.data.allContentfulBlogPost.edges.map((edge) => {
            return (
              <PostLink key={edge.node.slug} to={`/${edge.node.slug}`}>
                <PostLi>
                  <PostPublishedData>{edge.node.publishedDate}</PostPublishedData>
                  <PostTitle>{edge.node.title}</PostTitle>
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


const PostLiStartBorder = styled.hr`
  border-top: #F7F7F7 solid;
  border-width: 1px 0 0 0;
  margin: 0;
`

const PostUl = styled.ul`
  list-style: none;
  padding: 0;
`

const PostLi = styled.li`
  border-bottom: 1px #F7F7F7 solid;
  padding: .5rem 3rem;
  text-decoration: none;
  &:hover {
    background-color: #eee;
  }
`

const PostLink = styled(Link)`
  color: #000;
  text-decoration: none;
`

const PostTitle = styled.h2`
  font-size: 1rem;
`

const PostPublishedData = styled.p`
  color: #555;
  font-size: 0.7rem;
`
