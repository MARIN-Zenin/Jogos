const express = require("express");

const app = express();

const userRoutes = require("./routes/userRoutes"); // Importa as rotas de usuários

app.use(express.json()); // Middleware para interpretar JSON no corpo das requisições

app.use(userRoutes); // Usa as rotas definidas no arquivo userRoutes

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});