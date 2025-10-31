const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    manufacturer: String,
    vehicleCompatibility: [String],
    description: String,
    price: Number,
    images: [String],
    inStock: Number,
    category: String
}, { timestamps: true });
module.exports = mongoose.model('Product', productSchema);