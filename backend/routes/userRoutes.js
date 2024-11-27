// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Importa o controlador

router.get('/users', userController.getUsers); 
router.post('/users', userController.createUser); 
router.put('/users/:id', userController.updateUser); 
router.delete('/users/:id', userController.deleteUser); 
router.get('/alunos/id/:id', userController.getUsersByID);

module.exports = router;
