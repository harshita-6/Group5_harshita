import React from "react"
import Hero from "../components/Hero/hero"
import Features from "../components/Features/features"
import Team from "../components/Team/team"
import Layout from "../components/Layout/layout"

const Index = () => {
  return (
    <Layout>
      <Hero/>
      <Features/>
      <Team/>
    </Layout>
  )
}

export default Index
