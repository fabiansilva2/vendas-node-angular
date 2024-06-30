const Cliente = require('../models/Cliente');

exports.listarClientes = async (_req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.adicionarCliente = async (req, res) => {
    try {
        const { nome, email, telefone } = req.body;
        if (!nome || !email || !telefone) {
            return res.status(400).json({ message: 'Nome, email e telefone são obrigatórios' });
        }
        const novoCliente = await Cliente.create({ nome, email, telefone });
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.atualizarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email, telefone } = req.body;
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        cliente.nome = nome;
        cliente.email = email;
        cliente.telefone = telefone;
        await cliente.save();
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        await cliente.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
