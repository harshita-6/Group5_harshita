import React from "react"
import styled from "styled-components"

const Pagination = styled.div`
  height: auto;
  display: grid;
  grid-gap: 5px;
  padding: 5px;
  align-items: center;
  grid-template-columns: 95fr 5fr;

  > span1 {
    font-size: 20px;
  }
  span2 {
    font-size: 20px;
    display: flex;
    justify-content: center;
  }
`

function AddTaskModal({ open, modalLable, children, onClose }) {
  const handleClose = e => {
    if (e.target.className === "modalContainer") {
      onClose()
    }
    return null
  }

  if (open) {
    return (
      <div
        className="card shadow border-primary mb-4"
        onClick={handleClose}
        role="presentation"
        
      >
        <div className="card-header">
          <Pagination>
            <span1 className="fw-bold text-primary">{modalLable}</span1>
            <span2 className="btn btn-primary btn-sm" onClick={onClose}>
              Close
            </span2>
          </Pagination>
        </div>
        <div className="card-body">{children}</div>
      </div>
    )
  }
  return null
}

export default AddTaskModal
