import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ backgroundColor: "#556b2f" }}
    >
      <div className="container-fluid ">
        <Link className="navbar-brand mb-0 h1" to="/">
          INEFFABLE
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="btn text-danger fw-bold">
              <Link className="text-light fw-bold" to="/">
                Home
              </Link>
            </li>
            {/* <li className="btn text-danger fw-bold">
              <Link className="text-light fw-bold" to="/features">
                Features
              </Link>
            </li> */}
            <li className="btn text-danger fw-bold">
              <Link className="text-light fw-bold" to="/About">
                About
              </Link>
            </li>
            <li className="btn text-danger fw-bold">
              <Link className="text-light fw-bold" to="/Contact">
                Contact
              </Link>
            </li>
            <li className="btn text-danger fw-bold">
              <Link className="text-light  fw-bold" to="/blog">
                Blog
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="dropdown05" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu" aria-labelledby="dropdown05">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
