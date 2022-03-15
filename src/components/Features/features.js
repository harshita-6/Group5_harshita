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
import Image from "../Images/Images"

const Items = [
  {
    
    name: "HELPLINE NUMBERS",
    image: "HELPLINE NUMBERS.jpg",
  },
  {
    name: "VENT BOX",
    image: "VENT BOX.png",
  },
  {
    name: "DIARY",
    image: "Diary.jpg",
  },
  {
    name: "WHAT ARE YOU FEELING?",
    image: "feel.png",
  },
]

const Features = () => {
  return (
    <div className="container text-center py-5">
      <h1 class="pb-2 border-bottom text-center fw-bold ">Features</h1>
      <div className="row justify-content-center">
        {Items.map((item, i) => {
          return (
            <div key={i} className="col-lg-6 col-md-6 col-sm-12">
              <div className="card card-body mb-4">
                <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{ margin: "0px 0px 10px 0px" }}
                  filename={`${item.image}`}
                  alt="1"
                />
                <h3 className="m-2">{item.name}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Features