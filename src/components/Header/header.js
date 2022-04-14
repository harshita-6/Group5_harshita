import React from "react"

import { BrowserRouter as Router, Switch, Route, Link } from "gatsby"

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ backgroundColor: "#556b2f" }}
    >
      <div className="container-fluid ">
        <a className="navbar-brand mb-0 h1" href="/">
          INEFFABLE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto ">
            <li class="nav-item active">
              <a class="nav-link" aria-current="page" href="../">
                Home
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
