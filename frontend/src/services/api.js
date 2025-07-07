const BASE_URL = import.meta.env.VITE_API_URL;
const TASKS_URL = `${BASE_URL}/api/tasks`;

const handleResponse = async (res) => {
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Hubo un error en la API");
  }
  return res.status === 204 ? null : res.json();
};

export const getTasks = async () => {
  const res = await fetch(TASKS_URL);
  return await handleResponse(res);
};

export const createTask = async (task) => {
  const res = await fetch(TASKS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return await handleResponse(res);
};

export const updateTask = async (id, task) => {
  const res = await fetch(`${TASKS_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return await handleResponse(res);
};

export const deleteTask = async (id) => {
  const res = await fetch(`${TASKS_URL}/${id}`, {
    method: "DELETE",
  });
  return await handleResponse(res);
};
