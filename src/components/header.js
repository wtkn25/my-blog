import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <HeaderContent>
        <Link to="/">
          <HPTitle>tech.iratawa</HPTitle>
        </Link>
      </HeaderContent>
    </Wrapper >
  )
}

export default Header

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