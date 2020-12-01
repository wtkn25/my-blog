import React from 'react';
import styled from 'styled-components';

import Header from '../components/header';
import Footer from '../components/footer';
import GlobalCss from '../components/globalCss'


const Layout = (props) => {

  return (
    <div>
      <GlobalCss />
      <Header />
      <Grid>
        <ContentArea>
          {props.children}
        </ContentArea>
        {/* <SidebarArea></SidebarArea> */}
      </Grid>
      <Footer />
    </div>
  )
}

export default Layout

const Grid = styled.div`
  /* max-width: 1200px; */
  max-width: 800px;
  width: 100%;
  margin: 1rem auto;
  min-height: 100vh;
  display: grid;
  grid-template: 
    "main   sidebar" 1fr
    / 1fr 0px;
  /* gap: 16px; */
  > * {
    overflow: hidden;
    padding: 3rem;
  }
`

const ContentArea = styled.div`
  grid-area: main;
  background-color: #FFF;
`

const SidebarArea = styled.div`
  grid-area: sidebar;
  background-color: #aaaaaa;
`