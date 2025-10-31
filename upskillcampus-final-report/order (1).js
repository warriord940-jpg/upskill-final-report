const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [{ productId: mongoose.Schema.Types.ObjectId, quantity: Number }],
    deliveryAddress: String,
    total: Number,
    deliveryStatus: { type: String, default: 'Processing' }
}, { timestamps: true });
module.exports = mongoose.model('Order', orderSchema);