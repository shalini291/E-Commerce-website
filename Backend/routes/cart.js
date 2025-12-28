const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const Product = require('../models/Product');

// Get current user's cart
router.get('/', auth, async (req, res) => {
  await req.user.populate('cart.product');
  res.json(req.user.cart);
});

// Add/update item
router.post('/add', auth, async (req, res) => {
  const { productId, qty } = req.body;
  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  const existing = req.user.cart.find(c => c.product.toString() === productId);
  if (existing) {
    existing.qty = qty;
  } else {
    req.user.cart.push({ product: productId, qty });
  }
  await req.user.save();
  await req.user.populate('cart.product');
  res.json(req.user.cart);
});

// Remove item
router.post('/remove', auth, async (req, res) => {
  const { productId } = req.body;
  req.user.cart = req.user.cart.filter(c => c.product.toString() !== productId);
  await req.user.save();
  res.json(req.user.cart);
});

module.exports = router;