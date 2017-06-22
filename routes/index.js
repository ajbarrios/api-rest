'use strict';

const express = require('express');
const api = express.Router();
const auth = require('../middlewares/auth');
const ProductCtrl = require('../controllers/product');
const UserCtrl = require('../controllers/user');

api.get('/product', auth, ProductCtrl.getProducts);
api.get('/product/:productId', auth, ProductCtrl.getProduct);
api.post('/product', auth, ProductCtrl.saveProduct);
api.put('/product/:productId', auth, ProductCtrl.updateProduct);
api.delete('/product/:productId', auth, ProductCtrl.deleteProduct);
api.post('/signup', UserCtrl.signUp);
api.post('/signin', UserCtrl.signIn);
api.get('/private', auth, (req, res) => {
    res.status(200).send({ message:  'Tienes acceso!' });
});

exports = module.exports = api;