import React from "react"
import PropTypes from "prop-types"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import "../../styles/custom-style.scss"

const Layout = ({ children }) => {
  return (
    <div className="container-fluid p-0">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
