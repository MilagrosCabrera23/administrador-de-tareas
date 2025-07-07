import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks, deleteTask, updateTask } from "../services/api";
import TaskListComponent from "../components/TaskList/TaskList";

const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  
const handleDelete = async (id) => {
  try {
    await deleteTask(id);
    setTasks(tasks.filter(task => task.id !== id));
  } catch (error) {
    console.error("Error al eliminar tarea:", error);
  }
};

const handleToggleComplete = async (id) => {
  const task = tasks.find(t => t.id === id);
  try {
    const updated = await updateTask(id, { completed: !task.completed });
    setTasks(tasks.map(t => t.id === id ? updated : t));
  } catch (error) {
    console.error("Error al actualizar tarea:", error);
  }
};

const handleEdit = (id) => {
  navigate(`/tasks/${id}`); // O a la página de edición si la tenés
};
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const allTasks = await getTasks();
        setTasks(allTasks);
      } catch (error) {
        console.error("Error al obtener tareas:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="container mt-5">
      <TaskListComponent tasks={tasks} onEdit={handleEdit}
  onDelete={handleDelete}
  onToggleComplete={handleToggleComplete} />
    </div>
  );
};

export default TaskListPage;