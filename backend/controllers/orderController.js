// backend/controllers/orderController.js
const db = require('../db');

exports.createOrder = (req, res) => {
    const { user_id, total, status } = req.body;
    db.query('INSERT INTO orders (user_id, total, status) VALUES (?, ?, ?)', 
    [user_id, total, status], (err, results) => {
        if (err) throw err;
        res.status(201).json({ id: results.insertId, user_id, total, status });
    });
};

exports.getOrdersByUserId = (req, res) => {
    const { userId } = req.params;
    db.query('SELECT * FROM orders WHERE user_id = ?', [userId], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.getOrderById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM orders WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
};

exports.updateOrderStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    db.query('UPDATE orders SET status = ? WHERE id = ?', [status, id], (err, results) => {
        if (err) throw err;
        res.json({ id, status });
    });
};

exports.deleteOrder = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM orders WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.status(204).send();
    });
};