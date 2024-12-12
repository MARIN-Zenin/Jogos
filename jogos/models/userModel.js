const createConnection = require("../db/db.js"); 
const { Request, TYPES } = require("tedious");



exports.getAllJogos = (callback) => {
  const connection = createConnection();
  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); 
    }
    const query = `SELECT * FROM Jogos`; 
    const request = new Request(query, (err, rowCount) => {
      if (err) {
        return callback(err, null); 
      }

      if (rowCount === 0) {
        return callback(null, []); 
      }
    });

    const result = [];
    request.on("row", (columns) => {
      result.push({
        id: columns[0].value,
        nome: columns[1].value,
        genero: columns[2].value,
        plataforma: columns[3].value,
        lancamento: columns[4].value
      });
    });

    request.on("requestCompleted", () => {
      callback(null, result); 
    });

    connection.execSql(request); 
  });

  connection.connect(); 
};




exports.getJogosByGenero = (genero, callback) => {

  if (isNaN(genero) || genero <= 0) {
    return callback(new Error("ID inválido"), null);
  }

  const connection = createConnection(); 

  
  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null);
    }

    const query = `SELECT * FROM Jogos WHERE Genero = @genero`; 
    const request = new Request(query, (err, rowCount) => {
      if (err) {
        return callback(err, null); 
      }

      if (rowCount === 0) {
        return callback(null, []); 
      }
    });

    let jogos = [];
    
    request.on("row", (columns) => {
      jogos.push({
        id: columns[0].value,
        nome: columns[1].value,
        genero: columns[2].value,
        plataforma: columns[3].value,
        lancamento: columns[4].value
      });
    });

   
    request.on("requestCompleted", () => {
      callback(null, jogos); 
    });

    
    request.addParameter("genero", TYPES.Varchar, genero);

   
    connection.execSql(request);
  });

  
  connection.connect();
};


exports.getJogosByPlataforma = (plataforma, callback) => {

  if (isNaN(plataforma) || plataforma <= 0) {
    return callback(new Error("Plataforma inválida"), null);
  }

  const connection = createConnection(); 

  
  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null);
    }

    const query = `SELECT * FROM Jogos WHERE Plataforma = @plataforma`; 
    const request = new Request(query, (err, rowCount) => {
      if (err) {
        return callback(err, null); 
      }

      if (rowCount === 0) {
        return callback(null, []); 
      }
    });

    let jogos = [];
    
    request.on("row", (columns) => {
      jogos.push({
        id: columns[0].value,
        nome: columns[1].value,
        genero: columns[2].value,
        plataforma: columns[3].value,
        lancamento: columns[4].value
      });
    });

   
    request.on("requestCompleted", () => {
      callback(null, jogos); 
    });

    
    request.addParameter("plataforma", TYPES.Varchar, plataforma);

   
    connection.execSql(request);
  });

  
  connection.connect();
};



exports.createJogos = (data, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }

    // Consulta SQL para inserir um novo usuário na tabela Users
    const query = `INSERT INTO Jogos ( NomeDoJogo, Genero, Plataforma, DataLancamento) VALUES (@nome, @genero, @plataforma, @lancamento)`; 

    const request = new Request(query, (err) => {
      if (err) {
        return callback(err); // Chama a função callback com erro se houver falha
      } else {
        callback(null, { message: "Jogo inserido com sucesso!" }); // Retorna uma mensagem de sucesso
      }
    });

    // Adiciona os parâmetros necessários para a inserção
    request.addParameter("nome", TYPES.VarChar, data.NomeDoJogo);
    request.addParameter("genero", TYPES.VarChar, data.Genero);
    request.addParameter("plataforma", TYPES.VarChar, data.Plataforma);
    request.addParameter("lancamento", TYPES.VarChar, data.DataLancamento);

    // Executa a consulta SQL para inserção no banco de dados
    connection.execSql(request);
  });

  // Inicia a conexão com o banco de dados
  connection.connect();
};




exports.updateJogos = (id, nome, genero, plataforma, lancamento, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }

    // Consulta SQL para atualizar o nome do usuário pelo ID
    const query = ` UPDATE Jogos SET NomeDoJogo = @nome, Genero = @genero, Plataforma = @plataforma, DataLancamento = @lancamento WHERE ID = @id`;

    const request = new Request(query, (err) => {
      if (err) {
        return callback(err); // Chama a função callback com erro se houver falha
      } else {
        callback(null, { message: "Usuário atualizado com sucesso!" }); // Retorna uma mensagem de sucesso
      }
    });

    // Adiciona os parâmetros necessários para a atualização
    request.addParameter("id", TYPES.Int, id); // Passa o ID para a atualização
    request.addParameter("nome", TYPES.VarChar, NomeDoJogo); // Passa o novo nome
    request.addParameter("genero", TYPES.VarChar, Genero);
    request.addParameter("plataforma", TYPES.VarChar, Plataforma);
    request.addParameter("lancamento", TYPES.VarChar, DataLancamento);

    // Executa a consulta SQL para atualização no banco de dados
    connection.execSql(request);
  });

  // Inicia a conexão com o banco de dados
  connection.connect();
};


// Função para deletar um usuário existente
exports.deleteJogos = (id, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }

    // Consulta SQL para deletar o usuário pelo ID
    const query = `DELETE FROM Jogos WHERE ID = @id`;

    const request = new Request(query, (err) => {
      if (err) {
        return callback(err); // Chama a função callback com erro se houver falha
      } else {
        callback(null, { message: "Jogo deletado com sucesso!" }); // Retorna uma mensagem de sucesso
      }
    });

    // Adiciona o parâmetro necessário para a exclusão
    request.addParameter("id", TYPES.Int, id); // Passa o ID para exclusão

    // Executa a consulta SQL para exclusão no banco de dados
    connection.execSql(request);
  });

  // Inicia a conexão com o banco de dados
  connection.connect();
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


exports.getAllListasDesejos = (callback) => {
  const connection = createConnection();
  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); 
    }
    const query = `SELECT * FROM ListaDesejos`; 
    const request = new Request(query, (err, rowCount) => {
      if (err) {
        return callback(err, null); 
      }

      if (rowCount === 0) {
        return callback(null, []); 
      }
    });

    const result = [];
    request.on("row", (columns) => {
      result.push({
        id: columns[0].value,
        email: columns[1].value,
      });
    });

    request.on("requestCompleted", () => {
      callback(null, result); 
    });

    connection.execSql(request); 
  });

  connection.connect(); 
};


exports.createDesejos = (data, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }

    // Consulta SQL para inserir um novo usuário na tabela Users
    const query = `INSERT INTO ListaDesejos (IDJogo, Email) VALUES (@id, @email)`; 

    const request = new Request(query, (err) => {
      if (err) {
        return callback(err); // Chama a função callback com erro se houver falha
      } else {
        callback(null, { message: "desejo inserido com sucesso!" }); // Retorna uma mensagem de sucesso
      }
    });

    // Adiciona os parâmetros necessários para a inserção
    request.addParameter("IDJogo", TYPES.int, data.id);
    request.addParameter("genero", TYPES.VarChar, data.email);

    // Executa a consulta SQL para inserção no banco de dados
    connection.execSql(request);
  });

  // Inicia a conexão com o banco de dados
  connection.connect();
};


exports.updateDesejos = (id, data, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }

    const query = `UPDATE ListaDesejos SET IDJogo  WHERE Email = @email `;

    const request = new Request(query, (err) => {
      if (err) {
        return callback(err); // Chama a função callback com erro se houver falha
      } else {
        callback(null, { message: "Usuário atualizado com sucesso!" }); // Retorna uma mensagem de sucesso
      }
    });

    // Adiciona os parâmetros necessários para a atualização
    request.addParameter("IDJogo", TYPES.Int, id); // Passa o ID para a atualização
    request.addParameter("IDLista", TYPES.Int, id); // Passa o ID para a atualização
    request.addParameter("Email", TYPES.VarChar, email);

    // Executa a consulta SQL para atualização no banco de dados
    connection.execSql(request);
  });

  // Inicia a conexão com o banco de dados
  connection.connect();
};