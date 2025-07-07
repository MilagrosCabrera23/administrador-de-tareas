import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./pages/HomePage";
import TaskFormPage from "./pages/TaskFormPage";
import TaskListPage from "./pages/TaskListPage";
import TaskItemPage from "./pages/TaskItemPage";
import "./app.css";

 function App() {
    return ( 
      <Router>
         <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/tasks/new" element={<TaskFormPage />} />
            <Route path="/tasks/:id" element={<TaskItemPage />} />
            <Route path="/tasks" element={<TaskListPage />}/>
         </Routes>
      </Router>
    );
}

export default App