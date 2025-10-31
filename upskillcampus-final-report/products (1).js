const express = require('express');
const Product = require('../models/product');
const router = express.Router();

router.get('/', async (req, res) => {
    const { search = "", page = 1, limit = 10 } = req.query;
    const query = search ? { name: new RegExp(search, 'i') } : {};
    const products = await Product.find(query).skip((page - 1) * limit).limit(Number(limit));
    res.json({ products });
});

module.exports = router;