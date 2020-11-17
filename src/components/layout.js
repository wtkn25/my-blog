import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

const Layout = (props) => {

  return (
    <div className="container">
      <div>
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout