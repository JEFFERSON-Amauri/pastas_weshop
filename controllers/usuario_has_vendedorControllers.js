const {usuario_has_vendedor} = require('../database/models');
const usuario_has_vendedor = require('../database/models/usuario_has_vendedor');

const usuario_has_vendedorController = {
    index: async (req, res) => {
        console.log(usuario_has_vendedor);
        const usuario_has_vendedor = await usuario_has_vendedor.findAll();

        return res.json(usuario_has_vendedor);
    }
};
module.exports =usuario_has_vendedorController; 