// userController.js
const userModel = require("../models/userModel"); // Importa o model para interagir com o banco

// Função para lidar com a requisição de listagem de usuários
exports.getUsers = (req, res) => {
  userModel.getAllUsers((err, users) => {
    if (err) {
      res.status(500).send("Erro ao buscar usuário"); // Retorna um erro 500 se algo deu errado
    } else {
      res.json(users); // Retorna os usuários em formato JSON
    }
  });
};

exports.createUser = (req, res) => {
  const { name } = req.body;
  const { age } = req.body;
  const { email } = req.body;
  const { contact } = req.body;

  userModel.createUser({ name, age, email, contact }, (err) => {
    if (err) {
      res.status(500).send("Erro ao criar usuário"); // Retorna um erro 500 se algo deu errado
    } else {
      res.status(201).send("Usuário criado com sucesso");
    }
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { age } = req.body;
  const { email } = req.body;
  const { contact } = req.body;

  userModel.updateUser(id, name, age, email, contact, (err) => {
    if (err) {
      res.status(500).send("Erro ao atualizar usuário"); // Retorna um erro 500 se algo deu errado
    } else {
      res.send("Usuário atualizado com sucesso");
    }
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;

  userModel.deleteUser(id, (err) => {
    if (err) {
      res.status(500).send("Erro ao deletar usuário"); // Retorna um erro 500 se algo deu errado
    } else {
      res.send("Usuário deletado com sucesso");
    }
  });
};

exports.getUserById = (req, res) => {
  const { id } = req.params;

  userModel.getUserById(parseInt(id), (err, user) => {
    if (err) {
      return res.status(400).send("Erro ao buscar usuário"); // Retorna um erro 500 se algo deu errado
    }

    if (!user) {
      return res.status(404).send("Erro ao buscar usuário"); // Retorna um erro 500 se algo deu errado
    }

    res.status(200).json(user);
  });
};
