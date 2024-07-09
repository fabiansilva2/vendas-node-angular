const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ where: { username } });
        if (!usuario) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = bcrypt.compareSync(password, usuario.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: usuario.id, username: usuario.username }, 'secret_key', { expiresIn: '2h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
