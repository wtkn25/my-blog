import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Header = () => {
  const { site } = useStaticQuery(query)
  return (
    <Wrapper>
      <HeaderContent>
        <Link to="/">
          <HPTitle>{site.siteMetadata.title}</HPTitle>
        </Link>
      </HeaderContent>
    </Wrapper >
  )
}

export default Header

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Wrapper = styled.div`
  width: 100%;
`

const HeaderContent = styled.div`
  max-width: 980px;
  margin: 0 auto;
`

const HPTitle = styled.h1`
  color: #000000;
  display: inline-block;
  text-decoration: none;
`