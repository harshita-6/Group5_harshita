import React from "react"
import Image from "../Images/images"
import { Link } from "gatsby"
const Items = [
  {
    name: "HELPLINE NUMBERS",
    image: "HELPLINE NUMBERS.jpg",
    path: "/helpline",
  },
  {
    name: "VENT BOX",
    image: "VENT BOX.png",
    path: "/ventBox",
  },
  {
    name: "QUOTES",
    image: "Diary.jpg",
    path: "/quotes",
  },
  {
    name: "LIFE HAPPENS",
    image: "feel.png",
    path: "/blog",
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
                <div className="card card-body shadow mb-4">
                  <Image
                    className="d-block mx-lg-auto img-fluid m-4"
                    style={{
                      margin: "0 auto",
                    }}
                    filename={`${item.image}`}
                    alt="1"
                  />
                  <h2 class="m-2">{item.name}</h2>
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
