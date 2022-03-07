import React from "react"
import {
  Bootstrap,
  Calendar3,
  CpuFill,
  GeoFill,
  House,
  Speedometer,
  Toggles2,
  Tools,
} from "react-bootstrap-icons"

const Items = [
  {
    icon: <Bootstrap />,
    title: "Bootstrap title",
    description: "Bootstrap description paragraph",
  },
  {
    icon: <Calendar3 />,
    title: "Calendar3 title",
    description: "This is about.....",
  },
  {
    icon: <CpuFill />,
    title: "Calendar3 title",
    description: "This is about.....",
  },
  {
    icon: <GeoFill />,
    title: "Calendar3 title",
    description: "This is about.....",
  },
  {
    icon: <House />,
    title: "Calendar3 title",
    description: "This is about.....",
  },
  {
    icon: <Speedometer />,
    title: "Calendar3 title",
    description: "This is about.....",
  },
  {
    icon: <Toggles2 />,
    title: "Calendar3 title",
    description: "This is about.....",
  },
  {
    icon: <Tools />,
    title: "Calendar3 title",
    description: "This is about.....",
  },
]

const Features = () => {
  return (
    <div class="container px-4 py-5" id="icon-grid">
      <h2 class="pb-2 border-bottom text-center">Features</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        {Items.map((item, i) => {
          return (
            <div key={i} class="col d-flex align-items-start">
              <div
                class="bi text-muted flex-shrink-0 me-3"
                style={{ fontSize: "2rem" }}
              >
                {item.icon}
              </div>

              <div>
                <h4 class="fw-bold mb-0">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Features
