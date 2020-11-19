import { useStaticQuery } from 'gatsby';
import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

const SEO = ({ title, description }) => {
  console.log(title)
  const { site } = useStaticQuery(query)
  return (
    <Helmet
      htmlAttributes={{
        lang: 'ja',
      }}
      title={title ? `${title}|${site.siteMetadata.title}` : site.siteMetadata.title}
      meta={[
        { name: 'description', content: site.siteMetadata.description }
      ]}
    />
  )
}

export default SEO

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`