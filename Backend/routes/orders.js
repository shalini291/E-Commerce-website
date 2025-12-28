const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const Order = require('../models/Order');

// Place order
router.post('/', auth, async (req, res) => {
  // Expect items array or use user's cart
  const { items, shippingAddress } = req.body;
  const order = await Order.create({ user: req.user._id, items, shippingAddress, totalPrice: items.reduce((s,i)=>s+i.price*i.qty,0) });
  // optionally clear cart
  req.user.cart = [];
  await req.user.save();
  res.json(order);
});

// Get user's orders
router.get('/', auth, async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate('items.product');
  res.json(orders);
});

module.exports = router;