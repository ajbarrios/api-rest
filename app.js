'use strict';

const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const api = require('./routes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('.hbs', hbs({
     defaultLayout: 'default',
     extname: '.hbs'
})); 
app.set('view engine', '.hbs');

app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/product', (req, res) => {
    res.render('product');
});

app.use('/api', api);

exports = module.exports = app;