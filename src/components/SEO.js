import { useStaticQuery } from 'gatsby';
import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  description = description ? `${description.slice(0, 120)}...` : site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang: 'ja',
      }}
      title={title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title}
      meta={[
        { name: 'description', content: description }
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