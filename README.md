#  Administrador de Tareas

Este es un proyecto fullstack desarrollado con **React (Vite)** en el frontend y **Node.js + Express** en el backend. Permite **crear, ver, editar y eliminar tareas**, con una interfaz amigable y diseño responsive usando **React Bootstrap**.

---

##  Tecnologías utilizadas

- Frontend: React (Vite) + React Router + React Bootstrap
- Backend: Node.js + Express
- Comunicación: REST API
- Estilos: CSS Variables + Bootstrap
- Extras: react-icons, validación de formularios, manejo de errores

---
## Estructura del proyecto 
```
administrador-tareas/
├── backend/
│   ├── controllers/
│   │   └── taskController.js
│   ├── routes/
│   │   └── taskRoutes.js         
│   ├── app.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm/
│   │   │   │   └── TaskForm.css
│   │   │   │   └── TaskForm.jsx
│   │   │   ├── TaskItem/
│   │   │   │   └── TaskItem.css
│   │   │   │   └── TaskItem.jsx
│   │   │   └── TaskList/
│   │   │       └── TaskList.css
│   │   │       └── TaskList.jsx
│   │   ├── pages/
│   │   │   └── Home.css
│   │   │   └── Home.jsx
│   │   │   ├── TaskListPage.jsx
│   │   │   ├── TaskDetailPage.jsx
│   │   │   └── CreateTaskPage.jsx
│   │   ├── services/
│   │   │   └── taskService.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html 
│   ├── .env
│   └── package.json
│
├── README.md
└── .gitignore
```

##  Requisitos previos

- Node.js y npm instalados
- Git instalado
---

## Pasos para correrlo localmente

### 1. Cloná el repositorio

```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
```
### 2. Configura el backend
```bash
cd backend
npm install
```
### 2.1 Crea un archivo .env con lo siguiente:
PORT=3000

### 2.2 Iniciá el servidor con el siguiente comando:
```bash
npm run dev
```
### 3. Configura el frontend 
```bash
cd frontend
npm install
npm run dev
```
### 3.1 Crea un archivo .env con la API del backend:
VITE_API_URL=http://localhost:3000/api/tasks


## Funcionalidades 
-  Crear tareas
- Ver tareas
- Editar tareas
- Eliminar tareas
- Filtros por tareas completadas/pendientes 
- Validación de formularios
- Manejo de errores
- Interfaz responsive con Bootstrap

##  Estado del proyecto 
Este proyecto fue desarrollado como desafío técnico. Se encuentra funcional, y se le pueden seguir agregando mejoras como persistencia con SQLite, TypeScript o autenticación.




