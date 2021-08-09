const {produto} = require('../database/models');
const produto = require('../database/models/produto');

const produtoController = {
    index: async (req, res) => {
        console.log(produto);
        const produto = await produto.findAll();

        return res.json(produto);
    }
}

module.exports = produtoController
        
