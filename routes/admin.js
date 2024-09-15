const path = require('path');

const express = require('express');

const productsControlers=require('../controlers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',productsControlers.getAddProduct);

// /admin/add-product => POST
router.post('/add-product',productsControlers.postAddProduct)

module.exports=router;
