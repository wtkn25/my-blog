import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components';

const Pagination = ({ props }) => {
  const { pageContext } = props;
  const { pageNumber, numberOfPages, previousPagePath, nextPagePath } = pageContext;

  return (
    <Wrapper>
      {previousPagePath ? <PageLink to={previousPagePath}>&lt;</PageLink> : null}

      {nextPagePath ? <PageLink to={nextPagePath}>&gt;</PageLink> : null}
    </Wrapper>
  )
}

export default Pagination

const Wrapper = styled.div`
  text-align: center;
`


const PageLink = styled(Link)`
  display: inline-block;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #000;
  text-decoration: none;
  color: #000;
`