// backend/controllers/productController.js
const db = require('../db');

exports.getAllProducts = (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.getProductById = (req, res) => {
    const { id } = req.params;
  db.query('SELECT * FROM products WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
};

exports.createProduct = (req, res) => {
    const { name, description, price, stock } = req.body;
    db.query('INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)', 
    [name, description, price, stock], (err, results) => {
        if (err) throw err;
        res.status(201).json({ id: results.insertId, name, description, price, stock });
    });
};

exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock } = req.body;
    db.query('UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?', 
    [name, description, price, stock, id], (err, results) => {
        if (err) throw err;
        res.json({ id, name, description, price, stock });
    });
};

exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM products WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.status(204).send();
    });
};