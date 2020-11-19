import React from 'react';
import styled from 'styled-components';

import Header from '../components/header';
import Footer from '../components/footer';
import SEO from '../components/SEO';

const Layout = (props) => {

  return (
    <Wrapper>
      <Content>
        <Header />
        {props.children}
      </Content>
      <Footer />
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex-grow: 1;
`