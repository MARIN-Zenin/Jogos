const createConnection = require("../db"); 
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

