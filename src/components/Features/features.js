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
import Image from "../Images/images"
import { BrowserRouter as Router, Switch, Route, Link } from "gatsby"
const Items = [
  {
    name: "HELPLINE NUMBERS",
    image: "HELPLINE NUMBERS.jpg",
    path: "/helpline",
  },
  {
    name: "VENT BOX",
    image: "VENT BOX.png",
    path: "/ventbox",
  },
  {
    name: "QUOTES",
    image: "Diary.jpg",
    path: "/quotes",
  },
  {
    name: "LIFE HAPPENS",
    image: "feel.png",
    path: "/Feeling",
  },
]

const Features = () => {
  return (
    <div className="container text-center py-5">
      <h1 class="pb-2 border-bottom text-center fw-bold ">Features</h1>
      <div className="row justify-content-center">
        {Items.map((item, i) => {
          return (
            <div key={i} className="col-lg-6 col-md-6 col-sm-12 ">
              <Link to={item.path}>
                <div className="card card-body mb-4">
                  <Image
                    className="d-block mx-lg-auto img-fluid"
                    style={{ margin: "0px 0px 10px 0px" }}
                    filename={`${item.image}`}
                    alt="1"
                  />
                  <h2 class="m-2 btn stretched-link">{item.name}</h2>
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
