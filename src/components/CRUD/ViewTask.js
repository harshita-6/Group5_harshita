import React from "react"
import Modal from "./Modal"
import { marked } from "marked"

const renderer = new marked.Renderer()

function ViewTask({ onClose, open, title, description }) {
  return (
    <Modal modalLable="Task Item" onClose={onClose} open={open}>
      <h1 className="fw-bold card-title">{title}</h1>
      <div
        className="card-text"
        dangerouslySetInnerHTML={{
          __html: marked(description, {
            renderer: renderer,
          }),
        }}
      />
    </Modal>
  )
}

export default ViewTask
