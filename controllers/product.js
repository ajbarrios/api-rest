'use strict';

const Product = require('../models/product');

function getProduct(req, res) {
    let productId = req.params.productId;

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({ message: "Error al realizar la petición " });
        if (!product) res.status(404).send({ message: "El producto no existe!" });

        res.status(200).send({ product });
    });
}

function getProducts(req, res) {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({ message: "Error al realizar la petición " });
        if (!products) res.status(404).send({ message: "No existen productos!" });

        res.status(200).send({ products });
    });
}


function saveProduct(req, res) {
    const body = req.body;
    let product = new Product();

    product.name = body.name;
    product.picture = body.picture;
    product.price = body.price;
    product.category = body.category;
    product.description = body.description;

    product.save((err, productStored) => {
        if (err) res.status(500).send({ message: `Error al salvar en la BD: ${err} ` });
        console.log(productStored);
        res.status(200).send({ product: productStored });
    });
}

function updateProduct(req, res) {
    let productId = req.params.productId;
    let update = req.body;

    Product.findByIdAndUpdate(productId, update, { new: true }, (err, productUpdated) => {
        if (err) res.status(500).send({ message: 'Error al actualizar el producto!' });
        if (!productUpdated) res.status(404).send({ message: 'No existe el producto!' });

        res.status(200).send({ product: productUpdated });
    });
}

function deleteProduct(req, res) {
    var productId = req.params.productId;

    Product.findByIdAndRemove(productId, (err, product) => {
        if (err) res.status(500).send({ message: `Error al realizar la petición ` });
        if (!product) res.status(404).send({ message: `El producto no existe` });

        res.status(200).send({ message: 'El producto se ha eliminado!' });
    });
}

exports = module.exports = {
    getProduct,
    getProducts,
    updateProduct,
    saveProduct,
    deleteProduct
}