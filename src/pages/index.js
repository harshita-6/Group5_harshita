import React from "react"
import Faq from "../components/Faq/Faq"
import Features from "../components/Features/features"
import Hero from "../components/Hero/hero"
import Layout from "../components/Layout/layout"
import Team from "../components/Team/team"

import Carousel from "../components/Carousel/Carousel"

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Carousel />
      <Team />
      <Faq />
    </Layout>
  )
}

export default Index
