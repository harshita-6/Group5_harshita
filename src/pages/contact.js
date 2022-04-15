import React from "react"
import Layout from "../components/Layout/layout"
import Hero from "../components/Hero/hero"
const Contact = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h2 className="pb-2 border-bottom text-center">Contacts</h2>{" "}
        <div class="text-center">
          <h3 class="text-primary">How Can We Help You?</h3>
          <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisic</p>
        </div>
        <div class=" d-flex align-items-center justify-content-center">
          <div class="bg-white col-lg-8">
            <div class="p-4 rounded shadow-md">
              <form
                method="POST"
                role="presentation"
                netlify-honeypot="bot-field"
                data-netlify="true"
                name="contact"
              >
                <label for="name" class="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Your Name"
                  required
                />
              </form>
              <div class="mt-3">
                <label for="email" class="form-label">
                  Your Email
                </label>
                <input
                  type="text"
                  name="email"
                  class="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div class="mt-3">
                <label for="subject" class="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  class="form-control"
                  placeholder="Subject"
                  required
                />
              </div>
              <div class="mt-3 mb-3">
                <label for="message" class="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  cols="20"
                  rows="6"
                  class="form-control"
                  placeholder="message"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
