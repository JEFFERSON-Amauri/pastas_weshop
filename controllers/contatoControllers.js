const {contato} = require('../database/models');
const Usuario = require('../database/models/Contato');
const contatoController = {
    index: async (req, res) => {
        console.log(Usuario);
        const contato = await contato.findAll();

        return res.json(contato);
    }
};

module.exports = contatoController; 