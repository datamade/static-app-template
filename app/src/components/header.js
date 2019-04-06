import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "bootstrap/dist/css/bootstrap.min.css"


const NavItem = props => (
  <div className="nav-item" style={{ fontSize: '15px', margin: '10px' }}>
    <p style={{ textAlign: 'left', marginTop: '10px' }}>
      <Link to={props.href}>
        <i className={`fas fa-${props.icon}`}></i>&nbsp;
        <strong>{props.title}</strong>
      </Link>
    </p>
  </div>
)

const Header = ({ siteTitle }) => (
  <StaticQuery
    // This query retrieves the logo image. Change 'ssce_logo' to match the correct
    // logo for the site.
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}
    render={data => (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <div className="navbar-left">
          <Link to="/">
            <h1 style={{marginTop: '1rem'}}>
              {data.site.siteMetadata.title}
             </h1>
          </Link>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <NavItem href="/" icon="home" title="Home" />
            <NavItem href="/about" icon="question-circle" title="About" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
