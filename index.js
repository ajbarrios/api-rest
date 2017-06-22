'use strict';

const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.db, (err, res) => {
  if (err) return console.error(`Error al conectar a la BD! ${err}`);
  console.log('Conexión a la base de datos establecida!');
  app.listen(config.port, () => console.log(`API RESTful corriendo en http://localhost:${config.port}`));
});