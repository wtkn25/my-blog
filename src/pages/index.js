import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

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
    <Wrapper>
      <SEO />
      <Layout>
        <PostUl>
          {data.allContentfulBlogPost.edges.map((edge) => {
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
      </Layout>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
  max-width: 980px;
  margin: 0 auto;

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