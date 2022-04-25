import React from "react"
import { Facebook, Instagram, Linkedin } from "react-bootstrap-icons"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <section style={{ backgroundColor: "darkolivegreen" }}>
      <footer className="container container-fluid py-5">
        <div className="row">
          <div className="col-2">
            <h5 className="text-primary">Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="./about" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="./contact" className="nav-link p-0 text-muted">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-4 offset-1">
            <form>
              <h5 className="text-primary">Subscribe to our newsletter</h5>
              <p className="text-light">
                Monthly digest of whats new and exciting from us.
              </p>
              <div className="d-flex w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control shadow"
                  placeholder="Email address"
                />
                <button className="btn btn-primary shadow" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex text-light justify-content-between py-4 my-4 border-top">
          <p>&copy; 2022 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}

export default Footer
