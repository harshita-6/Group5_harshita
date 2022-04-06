import React, { useState } from "react"
import ViewTask from "./ViewTask"
import EditTask from "./EditTask"
import { doc, updateDoc, deleteDoc } from "firebase/firestore"
import { db } from "./firebase"

function Task({ id, title, description, completed }) {
  const [checked, setChecked] = useState(completed)
  const [open, setOpen] = useState({ edit: false, view: false, task: true })

  const handleClose = () => {
    setOpen({ edit: false, view: false, task: true })
  }

  /* function to update firestore */
  const handleChange = async () => {
    const taskDocRef = doc(db, "tasks", id)
    try {
      await updateDoc(taskDocRef, {
        completed: checked,
      })
    } catch (err) {
      alert(err)
    }
  }

  /* function to delete a document from firstore */
  const handleDelete = async () => {
    const taskDocRef = doc(db, "tasks", id)
    try {
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div
      className="card shadow mb-4 border-primary"
      
    >
      {open.task && (
        <div className="card-body">
          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              checked={checked}
              onChange={handleChange}
              id={`checkbox-${id}`}
            />
            <label
              className="form-check-label"
              type="button"
              role="presentation"
              onClick={() => setChecked(!checked)}
              htmlFor={`checkbox-${id}`}
            >
              {checked ? (
                <div className="fw-bold text-success">Completed</div>
              ) : (
                <div>Not Completed</div>
              )}
            </label>
          </div>
          <h4 className="fw-bold card-title">{title}</h4>
          <p className="card-text text-truncate">{description}</p>
          <div className="d-flex">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => setOpen({ ...open, view: true, task: false })}
            >
              View
            </button>
            <button
              className="btn btn-success btn-sm ms-auto"
              onClick={() => setOpen({ ...open, edit: true, task: false })}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm ms-1"
              onClick={handleDelete}
            >
              Delete 
            </button>
          </div>
        </div>
      )}

      {open.view && (
        <ViewTask
          onClose={handleClose}
          title={title}
          description={description}
          open={open.view}
        />
      )}

      {open.edit && (
        <EditTask
          onClose={handleClose}
          toEditTitle={title}
          toEditDescription={description}
          open={open.edit}
          id={id}
        />
      )}
    </div>
  )
}

export default Task
