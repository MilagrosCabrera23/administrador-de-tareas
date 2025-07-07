import React from "react";
import TaskItemComponent from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskListComponent = ({
  tasks = [],
  onEdit,
  onDelete,
  onToggleComplete,
}) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-4">
        <div className="text-muted mb-3">
          <i className="bi bi-card-checklist"></i>
        </div>
        <p className="h5 text-list">No hay tareas aún</p>
        <p className="text-muted">¡Crea tu primera tarea para comenzar!</p>
      </div>
    );
  }

  const completedTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <div className="mt-4">
      {/* Tareas pendientes */}
      {pendingTasks.length > 0 && (
        <div className="mb-4">
          <h4 className="mb-3 text-warning d-flex align-items-center gap-2">
            <span className="badge bg-warning rounded-circle"></span>
            Pendientes ({pendingTasks.length})
          </h4>
          <div className="list-group">
            {pendingTasks.map((task) => (
              <TaskItemComponent
                key={task.id}
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
                onToggleComplete={onToggleComplete}
              />
            ))}
          </div>
        </div>
      )}

      {/* Tareas completadas */}
      {completedTasks.length > 0 && (
        <div>
          <h4 className="mb-3 text-success d-flex align-items-center gap-2">
            <span className="badge bg-success rounded-circle"></span>
            Completadas ({completedTasks.length})
          </h4>
          <div className="list-group">
            {completedTasks.map((task) => (
              <TaskItemComponent
                key={task.id}
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
                onToggleComplete={onToggleComplete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskListComponent;
