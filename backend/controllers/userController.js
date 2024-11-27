
// controllers/userController.js
const userModel = require('../models/userModel'); // Importa o modelo de usuário
// Função para listar todos os usuários
exports.getUsers = (req, res) => {
  userModel.getAllUsers((err, users) => {
    if (err) {
      return res.status(500).send("Erro ao buscar usuários");
    }
    res.json(users); // Retorna os usuários em formato JSON
  });
};

// Função para criar um novo usuário
exports.createUser = (req, res) => {
  const data = req.body; // Extrai os dados do corpo da requisição
  userModel.createUser(data, (err) => {
    if (err) {
      return res.status(500).send("Erro ao criar usuário");
    }
    res.status(201).send("Usuário criado com sucesso");
  });
};

// // Função para atualizar um usuário existente
// exports.updateAluno = (req, res) => {
//   const { rm } = req.params; // Extrai o ID do usuário dos parâmetros da URL
//   const data = req.body; // Extrai os dados do corpo da requisição
//   userModel.updateUser(rm, data, (err) => {
//     if (err) {
//       return res.status(500).send("Erro ao atualizar usuário");
//     }
//     res.send("Usuário atualizado com sucesso");
//   });
// };

// // Função para deletar um usuário
// exports.deleteAluno = (req, res) => {
//   const { rm } = req.params; // Extrai o ID do usuário dos parâmetros da URL
//   userModel.deleteUser(rm, (err) => {
//     if (err) {
//       return res.status(500).send("Erro ao deletar usuário");
//     }
//     res.send("Usuário deletado com sucesso");
//   });
// };

// exports.getAlunosByRM = (req, res) => {
//   const { rm } = req.params;
//   userModel.getAlunosByRM(rm, (err, alunos) => {
//     if (err) {
//       return res.status(500).send("Erro ao buscar usuários");
//     }
//     res.json(alunos); // Retorna os usuários em formato JSON
//   });
// };

// exports.getAlunosByNOME = (req, res) => {
//   const { nome } = req.params;
//   userModel.getAlunosByNOME(nome, (err, alunos) => {
//     if (err) {
//       return res.status(500).send("Erro ao buscar usuários");
//     }
//     res.json(alunos); // Retorna os usuários em formato JSON
//   });
// };