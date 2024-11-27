const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Importa o controlador de usuário

// Rota GET para listar todos os usuários
router.get('/users', userController.getUsers); 

module.exports = router;