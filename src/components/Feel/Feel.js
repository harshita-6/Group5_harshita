import React from "react"
import background from "/src/images/bg.jpg"
import {
  Bootstrap,
  Calendar3,
  CpuFill,
  GeoFill,
  House,
  Speedometer2,
  Toggles2,
  Tools,
} from "react-bootstrap-icons"
import { Link } from "gatsby"
const Items = [
  {
    name: "Struggling with Sexual orientation",
    path: "/struggling",
  },
  {
    name: "Jealousy",
    path: "/jealousy",
  },
  {
    name: "Anxiety",
    path: "/anxiety",
  },

  {
    name: "Ego",
    path: "/ego",
  },

  {
    name: "Lack Of Motivation",
    path: "#",
  },
  {
    name: "confusion",
    path: "#",
  },
  {
    name: "Guilt",
    path: "/guilt",
  },
  {
    name: "Self-esteem",
    path: "#",
  },
  {
    name: "Irritated",
    path: "#",
  },
  {
    name: "Depression",
    path: "#",
  },
  {
    name: "Social Pressure",
    path: "#",
  },
  {
    name: "Stress",
    path: "#",
  },
]

const Feel = () => {
  return (
    <div className="container text-center py-5">
      <h1 class="py-5 border-bottom align-items-center fw-bold ">
        LIFE HAPPENS
      </h1>
      <div className="row row-header justify-content-center">
        {Items.map((item, i) => {
          return (
            <div key={i} className="col-lg-4 col-md-5 col-sm-12 ">
              <Link to={item.path}>
                <div
                  className="card card-body mb-4"
                  style={{
                    backgroundImage: `url(${background})`,
                  }}
                >
                  <h3 className="m-2  btn stretched-link">{item.name}</h3>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Feel
