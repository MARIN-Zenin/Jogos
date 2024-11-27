// server.js
const express = require('express');
const app = express();
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');

app.use(cors());
app.use(express.json());
app.use(userRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
