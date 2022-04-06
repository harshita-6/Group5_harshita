import React, { useState } from "react"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { db } from "./firebase"
import AddTaskModal from "./AddTaskModal"

function AddTask({ onClose, open }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  /* function to add new task to firestore */
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await addDoc(collection(db, "tasks"), {
        title: title,
        description: description,
        completed: false,
        created: Timestamp.now(),
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <AddTaskModal modalLable="Add Task" onClose={onClose} open={open}>
      <form className="mb-0" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label htmlFor="title" class="fw-bold form-label">
            Title
          </label>
          <input
            id="title"
            type="text"
            className="form-control"
            onChange={e => setTitle(e.target.value.toUpperCase())}
            value={title}
            placeholder="Enter title"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="decription" class="fw-bold form-label">
            Description
          </label>
          <textarea
            id="decription"
            className="form-control"
            rows="8"
            onChange={e => setDescription(e.target.value)}
            value={description}
            placeholder="Enter decription"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-sm">
          Done
        </button>
      </form>
    </AddTaskModal>
  )
}

export default AddTask
