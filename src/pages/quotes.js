import React from "react"
import Layout from "../components/Layout/layout"
import Feel from "../components/Feel/Feel"
import Hero from "../components/Hero/hero"
import Image from "../components/Images/images"
import { BrowserRouter as Router, Switch, Route, Link } from "gatsby"
const Items = [
  {
    image: "quote1.png",
  },
  {
    image: "quote2.png",
  },
  {
    image: "quote3.png",
  },
  {
    image: "quote4.png",
  },
  {
    image: "quote5.png",
  },
  {
    image: "quote6.png",
  },
  {
    image: "quote7.png",
  },
  {
    image: "quote8.png",
  },
  {
    image: "quote9.png",
  },
  {
    image: "quote10.png",
  },
  {
    image: "quote11.png",
  },
]
const Quotes = () => {
  return (
    <Layout>
      <Hero />
      <div className="container text-center py-5">
        <h1 class="py-5 border-bottom align-items-center fw-bold ">
          QUOTES
        </h1>
        <div className="row row-header justify-content-center">
          {Items.map((item, i) => {
            return (
              <div key={i} className="col-lg-4 col-md-5 col-sm-12" style={{paddingBottom: "50px" }} >
                
                
                <Image
              className="d-block mx-lg-auto img-fluid align-self-center"
              
              filename={`${item.image}`}
              alt="1"
            />

                
              </div>
               )
              })}
        </div>
      </div>
    </Layout>
  )
}

export default Quotes