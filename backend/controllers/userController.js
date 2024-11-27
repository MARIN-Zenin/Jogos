// controllers/userController.js
const userModel = require('../models/userModel'); // Corrigir o caminho para o modelo

exports.getUsers = (req, res) => {
  userModel.getAllUsers((err, users) => {
    if (err) {
      return res.status(500).send("Erro ao buscar usuários");
    }
    res.json(users);
  });
};

exports.createUser = (req, res) => {
  const data = req.body;
  userModel.createUser(data, (err) => {
    if (err) {
      return res.status(500).send("Erro ao criar usuário");
    }
    res.status(201).send("Usuário criado com sucesso");
  });
};

exports.updateUser = (req, res) => {
  const { ID } = req.params; // Corrigir o parâmetro
  const data = req.body;
  userModel.updateUser(ID, data, (err) => {
    if (err) {
      return res.status(500).send("Erro ao atualizar usuário");
    }
    res.send("Usuário atualizado com sucesso");
  });
};

exports.deleteUser = (req, res) => {
  const { ID } = req.params; // Corrigir o parâmetro
  userModel.deleteUser(ID, (err) => {
    if (err) {
      return res.status(500).send("Erro ao deletar usuário");
    }
    res.send("Usuário deletado com sucesso");
  });
};


exports.getUsersByID = (req, res) => {
  const { ID } = req.params;
  userModel.getUserssByID(ID, (err, users) => {
    if (err) {
      return res.status(500).send("Erro ao buscar usuários");
    }
    res.json(users); // Retorna os usuários em formato JSON
  });
};

// exports.getAlunosByNOME = (req, res) => {
//   const { nome } = req.params;
//   userModel.getAlunosByNOME(nome, (err, alunos) => {
//     if (err) {
//       return res.status(500).send("Erro ao buscar usuários");
//     }
//     res.json(alunos); // Retorna os usuários em formato JSON
//   });
// };