import React from "react"
import Image from "../Images/images"

const Hero = () => {
  return (
    <container class="jumbotron">
      <div className="row  row-header  align-items-center g-5 py-5">
        <div className="col-12 col-sm-6 text-center">
          <h1
            className="display-5 fw-bold lh-2 mb-3  "
            style={{ color: "darkgoldenrod" }}
          >
            YOU'RE INEFFABLE
          </h1>
          <p className="lead ">We are here to Help.</p>
        </div>
        <div className="col-12 col-sm-8 col-lg-6 ">
          <Image
            className="d-block mx-lg-auto img-fluid align-self-center"
            filename="Head.jpg"
            alt="1"
          />
        </div>
      </div>
    </container>
  )
}

export default Hero
