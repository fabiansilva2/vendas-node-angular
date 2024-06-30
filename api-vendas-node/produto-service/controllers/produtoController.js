const Produto = require('../models/Produto');

exports.listarProdutos = async (_req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.adicionarProduto = async (req, res) => {
    try {
        const { nome, email, telefone } = req.body;
        if (!nome || !email || !telefone) {
            return res.status(400).json({ message: 'Nome, email e telefone são obrigatórios' });
        }
        const novoProduto = await Produto.create({ nome, email, telefone });
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.atualizarProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email, telefone } = req.body;
        const produto = await Produto.findByPk(id);
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        produto.nome = nome;
        produto.email = email;
        produto.telefone = telefone;
        await produto.save();
        res.json(produto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletarProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findByPk(id);
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        await produto.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
