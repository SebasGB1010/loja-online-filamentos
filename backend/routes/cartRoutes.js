// backend/routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/:userId', cartController.getCartByUserId);
router.post('/:userId', cartController.addProductToCart);
router.put('/:userId/:productId', cartController.updateCartProductQuantity);
router.delete('/:userId/:productId', cartController.removeProductFromCart);

module.exports = router;