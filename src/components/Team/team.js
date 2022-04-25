import React from "react"
import {
  Bootstrap,
  Calendar3,
  CpuFill,
  Facebook,
  GeoFill,
  House,
  Instagram,
  Linkedin,
  Speedometer,
  Toggles2,
  Tools,
} from "react-bootstrap-icons"

import Image from "../Images/images"

const Items = [
  {
    image: "Deepshikha.jpg",
    name: "Deepshikha Kumari",
  },
  {
    image: "Divya.jpg",
    name: "Divya Gupta",
  },
  {
    image: "Harshita.jpg",
    name: "Harshita Meena",
  },
]

const Team = () => {
  return (
    <div className="container text-center py-5">
      <h1 class="pb-2 border-bottom text-center fw-bold">Team Members</h1>

      <div
        className="row justify-content-center"
        style={{ paddingTop: "50px" }}
      >
        {Items.map((item, i) => {
          return (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card card-body mb-4">
                <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    height: "200px",
                    margin: "0 auto",
                    width: "200px",
                    borderRadius: "50%",
                  }}
                  filename={`${item.image}`}
                  alt="1"
                />
                <h3 className="m-2">{item.name}</h3>
                <ul class="list-unstyled justify-content-center d-flex mb-0">
                  <li class="m-3">
                    <Linkedin />
                  </li>
                  <li class="m-3">
                    <Instagram />
                  </li>
                  <li class="m-3">
                    <Facebook />
                  </li>
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Team
