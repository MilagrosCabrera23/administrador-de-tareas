import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTasks, updateTask, deleteTask } from "../services/api";
import TaskItemComponent from "../components/TaskItem/TaskItem";

const TaskItemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar la tarea al montar el componente
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const allTasks = await getTasks();
        const foundTask = allTasks.find(t => t.id.toString() === id);
        if (!foundTask) {
          setError("Tarea no encontrada");
        } else {
          setTask(foundTask);
        }
      } catch (err) {
        setError("Error al cargar la tarea");
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  // Funciones para pasar a TaskItemComponent
  const handleEdit = () => {
    navigate(`/tasks/edit/${id}`); // Aquí podrías tener una página para editar
  };

  const handleDelete = async () => {
    try {
      await deleteTask(id);
      navigate("/tasks");
    } catch (err) {
      alert("Error al eliminar la tarea");
    }
  };

  const handleToggleComplete = async () => {
    try {
      const updatedTask = await updateTask(id, { completed: !task.completed });
      setTask(updatedTask);
    } catch (err) {
      alert("Error al actualizar la tarea");
    }
  };

  if (loading) return <p>Cargando tarea...</p>;
  if (error) return <p className="text-danger">{error}</p>;
  if (!task) return null;

  return (
    <TaskItemComponent
      key={task.id}
      task={task}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onToggleComplete={handleToggleComplete}
    />
  );
};

export default TaskItemPage;