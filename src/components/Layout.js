import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: `Joe Buza's Website` },
            {
              name: 'keywords',
              content: 'react, react-native, graphql, javascript',
            },
          ]}
        />
        <Wrapper>{children}</Wrapper>
      </Container>
    )}
  />
)

export default Layout
