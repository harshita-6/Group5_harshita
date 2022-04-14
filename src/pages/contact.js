import React from "react"
import Layout from "../components/Layout/layout"
import Hero from "../components/Hero/hero"
const Contact = () => {
  return (
    <Layout>
      <Hero />
      <div className="container py-5">
        <h2 className="pb-2 border-bottom text-center">Contacts</h2>{" "}
      </div>
    </Layout>
  )
}

export default Contact
