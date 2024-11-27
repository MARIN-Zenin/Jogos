const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Importa o controlador de usuário

// Rota GET para listar todos os usuários
router.get('/users', userController.getUsers); 

// Rota POST para criar um novo usuário
router.post('/users', userController.createUsers); // Aqui estamos chamando o método createUser

// Rota PUT para atualizar um usuário existente
router.put('/users/:id', userController.updateUsers); // Aqui estamos chamando o método updateUser

// Rota DELETE para deletar um usuário
router.delete('/users/:id', userController.deleteUsers); // Aqui estamos chamando o método deleteUser

module.exports = router;