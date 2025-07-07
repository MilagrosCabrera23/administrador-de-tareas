import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import "./TaskItem.css"

const TaskItemComponent = ({task, onEdit, onDelete, onToggleComplete}) => {

  return (
         <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-start flex-column flex-md-row gap-3">
            <div onClick={() => onToggleComplete(task.id)}>
                {task.completed ? (
            <FaCheckCircle className="text-success" size={20} />
          ) : (
            <FaRegCircle className="text-warning" size={20} />
          )}
            </div>

          <div>
        <h5 className={`mb-1`}>
         <Link to={`/tasks/${task.id}`} className="text">
              {task.title}
            </Link>
             </h5>

        {task.description && (
          <p className="mb-1">{task.description}</p>
        )}
        <small className="text">
          Estado:{" "}
          <strong>{task.completed ? "Completada " : "Pendiente "}</strong>
        </small>
      </div>
      </div>

      <div className="d-flex gap-2">
        <Button variant="btn btn-primary" size="sm" onClick={() => onEdit(task.id)}>
          Editar
        </Button>
        <Button variant="btn btn-danger" size="sm" onClick={() => onDelete(task.id)}>
          Eliminar
        </Button>
      </div>
    </li>
   );
};


export default TaskItemComponent; 