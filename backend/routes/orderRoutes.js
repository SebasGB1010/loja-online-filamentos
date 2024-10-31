// backend/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/', orderController.createOrder);
router.get('/user/:userId', orderController.getOrdersByUserId);
router.get('/:id', orderController.getOrderById);
router.put('/:id', orderController.updateOrderStatus);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;