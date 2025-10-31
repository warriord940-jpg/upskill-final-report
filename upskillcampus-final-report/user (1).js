const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    passwordHash: String,
    role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
    addresses: [{
        street: String, city: String, state: String, zipcode: String
    }]
}, { timestamps: true });
module.exports = mongoose.model('User', userSchema);