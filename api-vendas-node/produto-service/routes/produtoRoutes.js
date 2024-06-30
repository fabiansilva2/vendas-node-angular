const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/produtos', authMiddleware, produtoController.listarProdutos);

module.exports = router;
