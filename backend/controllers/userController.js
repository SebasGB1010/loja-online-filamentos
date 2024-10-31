// backend/controllers/userController.js
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
    [username, email, hashedPassword], (err, results) => {
        if (err) throw err;
        res.status(201).json({ id: results.insertId, username, email });
    });
};

exports.loginUser = (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const user = results[0];
    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });
        res.json({ token });
    });
};

exports.getUserById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
};

exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    db.query('UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?', 
    [username, email, hashedPassword, id], (err, results) => {
        if (err) throw err;
        res.json({ id, username, email });
    });
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.status(204).send();
    });
};