var express = require('express');
const contatoController = require('../controllers/contatoController');
const produtoController = require('../controllers/produtoController');
const usuarioController = require('../controllers/usuarioController');
const usuario_has_vendedorController = require('../controllers/usuario_has_vendedorController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contato', contatoController.index);
router.get('/produto', produtoController.index);
router.get('/usuario', usuarioController.index);
router.get('/usuario_has_vendedor', usuario_has_vendedorController.index);

module.exports = router;
