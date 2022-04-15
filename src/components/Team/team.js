import React from "react"
import { Facebook, Instagram, Linkedin } from "react-bootstrap-icons"

import Image from "../Images/images"

const Items = [
  {
    image: "member1.jpeg",
    name: "Layla",
  },
  {
    image: "member2.jpg",
    name: "Carl",
  },
  {
    image: "member3.jpg",
    name: "Samuel",
  },
]

const Team = () => {
  return (
    <div className="container text-center py-5">
      <h2 class="pb-2 border-bottom text-center fw-bold">Team Members</h2>

      <div className="row justify-content-center">
        {Items.map((item, i) => {
          return (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card card-body shadow mb-4">
                <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    height: "200px",
                    margin: "0 auto",
                    width: "200px",
                    borderRadius: "50%",
                  }}
                  filename={item.image}
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
