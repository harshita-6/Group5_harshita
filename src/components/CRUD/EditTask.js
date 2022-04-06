import React, { useState } from "react"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "./firebase"
import Modal from "./Modal"

function EditTask({ open, onClose, toEditTitle, toEditDescription, id }) {
  const [title, setTitle] = useState(toEditTitle)
  const [description, setDescription] = useState(toEditDescription)

  /* function to update firestore */
  const handleUpdate = async e => {
    e.preventDefault()
    const taskDocRef = doc(db, "tasks", id)
    try {
      await updateDoc(taskDocRef, {
        title: title,
        description: description,
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLable="Edit Task" onClose={onClose} open={open}>
      <form className="mb-0" onSubmit={handleUpdate}>
        <div class="mb-3">
          <label htmlFor="title" class="fw-bold form-label">
            Title
          </label>{" "}
          <input
            id="title"
            type="text"
            class="form-control"
            onChange={e => setTitle(e.target.value.toUpperCase())}
            value={title}
          />
        </div>

        <div class="mb-3">
          <label htmlFor="decription" class="fw-bold form-label">
            Description
          </label>{" "}
          <textarea
            id="decription"
            className="form-control"
            rows="8"
            onChange={e => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-sm">
          Done
        </button>
      </form>
    </Modal>
  )
}

export default EditTask
