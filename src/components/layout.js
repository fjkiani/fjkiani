import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import Header from "./header"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
@media only screen and (max-width: 480px) {
  html {
    font-size: 100%;
  }
}
`

const Layout = ({ children }) => {
  return (
    <main>
      {/* <Header></Header> */}

      {children}
      <Footer/>
    
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
