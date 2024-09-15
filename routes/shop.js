const path = require('path');

const express = require('express');

const productsControlers=require('../controlers/products')

const router = express.Router();

router.get('/',productsControlers.getProducts) 
module.exports = router;