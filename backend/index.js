// backend/index.js
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3001;

// Conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'milanesaconpapas1010',
  database: 'filamento_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Ruta para la raíz
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de la tienda online de filamentos');
  });

// Ruta para obtener todos los productos
app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });