require('dotenv').config();

//Importa la app
const app = require("./app");
// Leer el puerto desde .env o usar 3000 por defecto
const port = process.env.PORT || 3000;

//Inicia el servidor
app.listen(port, () => console.log(`Server running on port ${port}`));