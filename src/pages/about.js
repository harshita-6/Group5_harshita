import React from "react"
import Layout from "../components/Layout/layout"
import Hero from "../components/Hero/hero"

const About = () => {
  return (
    <Layout>
      <Hero />
      <div style={{ backgroundImage: "/src/images/Head.jpg" }}>
        <div className="container py-5">
          <h2 className="pb-2 border-bottom text-center">About</h2>
        </div>
      </div>
    </Layout>
  )
}

export default About
