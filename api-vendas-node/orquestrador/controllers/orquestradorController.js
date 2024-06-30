const axios = require('axios');

exports.login = async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3001/api/auth/login', {
            username: req.body.username,
            password: req.body.password
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.listarClientes = async (_req, res) => {
    try {
        const response = await axios.get('http://localhost:3002/api/clientes');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.adicionarCliente = async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3002/api/clientes', req.body, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.atualizarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.put(`http://localhost:3002/api/clientes/${id}`, req.body, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.delete(`http://localhost:3002/api/clientes/${id}`, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.listarPedidos = async (_req, res) => {
    try {
        const response = await axios.get('http://localhost:3003/api/pedidos');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.adicionarPedido = async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3003/api/pedidos', req.body, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.atualizarPedido = async (req, res) => {
    try {
        const response = await axios.put(`http://localhost:3003/api/pedidos/${req.params.id}`, req.body, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletarPedido = async (req, res) => {
    try {
        const response = await axios.delete(`http://localhost:3003/api/pedidos/${req.params.id}`, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.listarProdutos = async (_req, res) => {
    try {
        const response = await axios.get('http://localhost:3004/api/produtos');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.adicionarProduto = async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3004/api/produtos', req.body, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.atualizarProduto = async (req, res) => {
    try {
        const response = await axios.put(`http://localhost:3004/api/produtos/${req.params.id}`, req.body, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletarProduto = async (req, res) => {
    try {
        const response = await axios.delete(`http://localhost:3004/api/produtos/${req.params.id}`, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
