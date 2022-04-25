import React from "react"
import Image from "../Images/images"

const Hero = () => {
  return (
    <div class=" container-md py-5">
      <div
        className="row  row-header align-items-center g-5 py-5"
        style={{ paddingRight: "50px" }}
      >
        <div className="col-12 col-md-6 col-sm-6 text-center">
          <h1
            className="display-1 fw-bold lh-2 "
            style={{
              fontSize: "6rem",
              color: "darkgoldenrod",
              fontFamily: "Brush Script MT, cursive",
            }}
          >
            You're Ineffable
          </h1>
          <p
            className="lead "
            style={{
              fontSize: "2rem",
              fontFamily: "Brush Script MT, cursive",
            }}
          >
            Live a life with no regrets and do it your way.
          </p>
        </div>
        <div className="col-12 col-md col-sm-6 ">
          <Image
            className="d-block mx-lg-auto img-fluid align-self-center shadow"
            filename="collage.png"
            style={{ borderRadius: "10px" }}
            alt="1"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
