const userModel = require("..//models/userModel"); // Importa o model para interagir com o banco

//função que lista todos os jogos

exports.getJogos = (req, res) => { 
userModel.getAllJogos((err, jogos) => {
if (err) {
res.status(500).send('Erro ao buscar jogos'); 
} else {
res.json(jogos); //vai retornar os jogos em formato json
}
});
};

exports.getJogosByGenero = (req, res) => {
   const { generos } = req.params;
   userModel.getJogosByGenero (generos, (err, jogos) => {
    if (err) return res.status(500).send ('Erro ao buscar gênero');
    res.json(jogos)
   });
};

exports.getJogosByPlataforma = (req, res) => {
    const { plataforma } = req.params;
    userModel.getJogosByGenero (plataforma, (err, jogos) => {
     if (err) return res.status(500).send ('Erro ao buscar plataforma');
     res.json(jogos)
    });
 };

exports.createJogos = (req, res) => {
    const data = req.body;
    userModel.createJogos(data, (err) => {
        if (err) {
            return res.status(500).send('Erro ao criar jogo')
        } else {
            res.status(201).send('Jogo criado com sucesso')
        }
    });
};

exports.updateJogos = (req, res) => {
    const { idJogo } = req.params;
    const data = req.body;
    userModel.updateJogos (idJogo, data, (err) => {
        if (err) {
            res.status (500).send('Erro ao atualizar jogo');
        } else {
            res.send ('Jogo atualizado com sucesso')
        }
    });
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    exports.getListaDesejos = (req, res) => { 
    userModel.getAllListaDesejos((err, ListaDesejos) => {
    if (err) {
    res.status(500).send('Erro ao buscar lista de desejos'); 
    } else {
    res.json(ListaDesejos); //vai retornar os jogos em formato json
    }
    });
    };


    exports.createDesejos = (req, res) => {
    const data = req.body;
     userModel.createDesejos(data, (err) => {
     if (err) {
          return res.status(500).send('Erro ao adicionar desejo')
        } else {
          res.status(201).send('Desejo criado com sucesso')
        }
    });
    };

    exports.updateDesejos = (req, res) => {
        const { idDesejos } = req.params;
        const data = req.body;
        userModel.updateDesejos (idDesejos, data, (err) => {
            if (err) {
                res.status (500).send('Erro ao atualizar desejo');
            } else {
                res.send ('Desejo atualizado com sucesso')
            }
        });
    };