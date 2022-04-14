import React from "react"
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
import { BrowserRouter as Router, Switch, Route, Link } from "gatsby"
const Items = [
  {
    name: "Anxiety",
    path: "#",
  },
  {
    name: "Jealousy",
    path: "/jealousy",
  },
  {
    name: "Ego",
    path: "/ego",
  },
  {
    name: "Struggling with Sexual orientation",
    path: "/struggling",
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
                <div className="card card-body mb-5" style={{backgroundImage: "URL('')"}}>
                <Image
                    className="d-block mx-lg-auto img-fluid"
                    style={{ margin: "0px 0px 10px 0px"}}
                    filename={`${item.image}`}
                    alt="1"
                  />
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