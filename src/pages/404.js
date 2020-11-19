import React from "react"
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';

const Error404 = () => {

  return (

    <Layout>
      <Wrapper>
        <p>404です。</p><Link to="/">HOMEへ戻る</Link>
      </Wrapper>
    </Layout>

  )
}

export default Error404

const Wrapper = styled.div`
  max-width: 980px;
  margin: 0 auto;
  text-align: center;
`