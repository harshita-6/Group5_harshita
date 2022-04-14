import React from "react"
import Image from "../Images/Images"

const Hero = () => {
  return (
    <container class="jumbotron">
      <div className="row  row-header align-items-center g-5 py-5">
        <div className="col-12 col-md col-sm-6 text-center">
          <h1
            className="display-1 fw-bold lh-2 "
            style={{
              color: "darkgoldenrod",
              fontFamily: "Brush Script MT, cursive",
            }}
          >
            You're Ineffable
          </h1>
          <p className="lead ">We are here to Help.</p>
        </div>
        <div className="col-12 col-md col-sm-6 ">
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
