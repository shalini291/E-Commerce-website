const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      qty: Number,
      price: Number
    }
  ],
  shippingAddress: String,
  totalPrice: Number,
  status: { type: String, enum: ['placed','shipped','delivered','cancelled'], default: 'placed' }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);