// backend/controllers/cartController.js
const db = require('../db');

exports.getCartByUserId = (req, res) => {
    const { userId } = req.params;
    db.query('SELECT * FROM cart WHERE user_id = ?', [userId], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.addProductToCart = (req, res) => {
    const { userId } = req.params;
    const { product_id, quantity } = req.body;
    db.query('INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)', 
    [userId, product_id, quantity], (err, results) => {
        if (err) throw err;
        res.status(201).json({ id: results.insertId, user_id: userId, product_id, quantity });
    });
};

exports.updateCartProductQuantity = (req, res) => {
    const { userId, productId } = req.params;
    const { quantity } = req.body;
    db.query('UPDATE cart SET quantity = ? WHERE user_id = ? AND product_id = ?', 
    [quantity, userId, productId], (err, results) => {
        if (err) throw err;
        res.json({ user_id: userId, product_id: productId, quantity });
    });
};

exports.removeProductFromCart = (req, res) => {
    const { userId, productId } = req.params;
    db.query('DELETE FROM cart WHERE user_id = ? AND product_id = ?', 
    [userId, productId], (err, results) => {
        if (err) throw err;
        res.status(204).send();
    });
};