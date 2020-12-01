import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Header = () => {
  const { site } = useStaticQuery(query)
  return (
    <Wrapper>
      <HeaderContent>
        <TitleLogo to="/">{site.siteMetadata.title}</TitleLogo>
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
  background-color: #FFF;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .5);
`

const HeaderContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const TitleLogo = styled(Link)`
  color: #000000;
  font-size: 2rem;
  font-weight: bold;
  display: inline-block;
  margin: 1.2rem 1rem;
  text-decoration: none;
`