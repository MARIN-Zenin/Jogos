// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//----------------------------------------[Lista de Jogos]

// Rota GET para buscar todos os jogos
router.get("/jogos", userController.getJogos);

// Rota GET para buscar jogos por gênero
router.get("/jogos/generos", userController.getJogosByGenero);

// Rota GET para buscar jogos por plataforma
router.get("/jogos/plataforma", userController.getJogosByPlataforma);

// Rota POST para incluir novos jogos 
router.post("/jogos", userController.createJogos);

// Rota PUT para atualizar jogo por ID
router.put("/jogos/:idJogo", userController.updateJogos);

// Rota DELETE para excluir um jogo po ID
router.delete("/jogos/:idJogo", userController.deleteJogos)

//----------------------------------------[Lista de Desejos]

// Rota GET para buscar todos os desejos
router.get("/desejos", userController.getDesejos);

// Rota POST para incluir novos jogos desejados
router.post("/desejos", userController.createDesejos);

// Rota PUT para atualizar jogo por ID
router.put("/desejos/:idDesejo", userController.updateDesejos);

module.exports = router;