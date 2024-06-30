const express = require('express');
const router = express.Router();
const orquestradorController = require('../controllers/orquestradorController');

router.post('/login', orquestradorController.login);
router.get('/clientes', orquestradorController.listarClientes);
router.post('/clientes', orquestradorController.adicionarCliente);
router.put('/clientes/:id', orquestradorController.atualizarCliente);
router.delete('/clientes/:id', orquestradorController.deletarCliente);
router.get('/pedidos', orquestradorController.listarPedidos);
router.post('/pedidos', orquestradorController.adicionarPedido);
router.put('/pedidos/:id', orquestradorController.atualizarPedido);
router.delete('/pedidos/:id', orquestradorController.deletarPedido);
router.get('/produtos', orquestradorController.listarProdutos);
router.post('/produtos', orquestradorController.adicionarProduto);
router.put('/produtos/:id', orquestradorController.atualizarProduto);
router.delete('/produtos/:id', orquestradorController.deletarProduto);

module.exports = router;
