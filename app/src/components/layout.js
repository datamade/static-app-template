/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./header"
import "./layout.css"


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
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div class="container" style={{marginTop: '1rem'}}>
            <div class="row">
                <div class="col-md-12">
                  {children}
                </div>
            </div>
            <div class="footer">
              <p></p>
            </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
