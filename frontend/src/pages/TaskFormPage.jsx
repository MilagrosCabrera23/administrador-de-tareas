import React from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../services/api"; 
import TaskFormComponent from "../components/TaskForm/TaskForm";

const NewTaskPage = () => {
  const navigate = useNavigate();

  const handleCreateTask = async (task) => {
    await createTask(task);
    navigate("/tasks"); 
  };

  return (
    <TaskFormComponent onSubmit={handleCreateTask} />
  );
};

export default NewTaskPage;