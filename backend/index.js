// backend/index.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // Importar CORS
const app = express();
const port = 3001;

// Middleware para parsear JSON
app.use(express.json());
app.use(cors()); // Usar CORS

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

// Importar rutas
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de la tienda online de filamentos');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});