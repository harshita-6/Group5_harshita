import React from "react"
import Image from "../Images/images"
import { Link } from "gatsby"
const Items = [
  {
    name: "HELPLINE NUMBERS",
    image: "HN1.png",
    path: "/helpline",
  },
  {
    name: "VENT BOX",
    image: "VB.png",
    path: "/ventBox",
  },
  {
    name: "QUOTES",
    image: "LH.png",
    path: "/quotes",
  },
  {
    name: "LIFE HAPPENS",
    image: "WTR.png",
    path: "/blog",
  },
]

const Features = () => {
  return (
    <div className="container text-center py-5">
      <h1 class="pb-2 border-bottom text-center fw-bold ">Features</h1>
      <div
        className="row justify-content-center"
        style={{ paddingTop: "50px" }}
      >
        {Items.map((item, i) => {
          return (
            <div key={i} className="col-lg-3 col-md-6 col-sm-12 ">
              <Link to={item.path}>
                <div className="card shadow mb-4 ">
                  <Image
                    className="d-block mx-lg-auto img-fluid align-self-center "
                    style={{
                      margin: "0 auto",
                    }}
                    filename={`${item.image}`}
                    alt="1"
                  />
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Features
