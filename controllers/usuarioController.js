const {usuario} = require('../database/models');
const Usuario = require('../database/models/Usuario');

const usuarioController = {
    index: async (req, res) => {
        console.log(Usuario);
        const usuario = await Usuario.findAll();

        return res.json(usuario);
    }
};

module.exports = alunoController; 