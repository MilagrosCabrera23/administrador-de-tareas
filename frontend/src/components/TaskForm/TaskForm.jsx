import React from "react";
import { useState } from "react";
import "./TaskForm.css"

const TaskFormComponent = ({ 
  initialData = {}, 
  onSubmit, 
  onCancel, 
  submitLabel ="Guardar tarea" 
}) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [completed, setCompleted] = useState(initialData.completed || false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = "El título es obligatorio";
    } else if (title.trim().length < 6) {
      newErrors.title = "El título debe tener al menos 6 caracteres";
    }
    if (description.trim().length > 600) {
      newErrors.description = "La descripción no puede exceder 600 caracteres";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await onSubmit({ 
        title: title.trim(), 
        description: description.trim(), 
        completed 
      });
      if (!initialData.id) {
        setTitle("");
        setDescription("");
        setCompleted(false);
      }
      setErrors({});
    } catch (error) {
      console.error("Hubo un error al guardar la tarea:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    else {
      setTitle("");
      setDescription("");
      setCompleted(false);
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">

        <div>
         <h2 className="form-title text-center">Crear una nueva tarea</h2>
        <p className="form-description text-center">
          Completá los campos para agregar una nueva tarea a tu lista.
        </p>
      </div>

      <div>
        <label htmlFor="title" className="titles-form">Título</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (errors.title) setErrors((prev) => ({ ...prev, title: undefined }));
          }}
          className={`form-control`}
          placeholder="ingrese un título"
          disabled={isSubmitting}
        />
        {errors.title && <p className="small text-muted">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="titles-form">Descripción</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            if (errors.description) setErrors((prev) => ({ ...prev, description: undefined }));
          }}
          rows={3}
          className={`form-control`}
          placeholder="La descripcion no debe pasar los 600 caracteres"
          disabled={isSubmitting}
        />
        <div className="d-flex justify-between small text-muted mt-2">
          {errors.description && <p className="text-red-500">{errors.description}</p>}
        </div>
      </div>

      <div className="d-flex items-center gap-2 m-2">
        <input
          id="completed"
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          disabled={isSubmitting}
        />
        <label htmlFor="completed"> ¿La tarea esta completada? </label>
      </div>

      <div className="d-flex gap-2">
        <button type="submit" disabled={isSubmitting} className="btn btn-enviar me-2">
          {isSubmitting ? "Guardando..." : submitLabel}
        </button>
        <button type="button" onClick={handleCancel} disabled={isSubmitting} className="btn btn-cancelar">
          Cancelar
        </button>
      </div>
    </form>
  );
};


export default TaskFormComponent; 