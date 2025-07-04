let tasks = [];
let idCounter = 1;

const getTasks = (req, res) => {
  res.json(tasks);
};

const createTask = (req, res) => {
  const { title,description } = req.body;
  if (!title) return res.status(400).json({ error: 'El titulo es requerido' });
  if (!description) return res.status(400).json({ error: 'La descripcion es requerida' });
 if (description.length > 500) {
    return res.status(400).json({ error: 'La descripción no puede tener más de 500 caracteres' });
  }

  const newTask = { id: idCounter++, title,description,completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description,completed } = req.body;

  const task = tasks.find(t => t.id == id);
  if (!task) return res.status(404).json({ error: 'La tarea no existe o no se encuentra' });
  task.title = title ?? task.title;
  task.description = description ?? task.description;
  task.completed = completed ?? task.completed;
  res.json(task);
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(t => t.id == id);
  if (index === -1) return res.status(404).json({ error: 'La tarea no existe o no se encuentra' });

  tasks.splice(index, 1);
  res.status(204).end();
};

module.exports = { getTasks, createTask, updateTask, deleteTask };