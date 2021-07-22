'use strict';

const express       = require('express');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose'); 
const config        = require('./config');

const app = express();
const router = express.Router();

// Conecta ao MongoDB
mongoose.connect(config.connectionString,  {useNewUrlParser: true, useUnifiedTopology: true});

// Carrega os modelos
const Product = require('./models/product');
const Animal = require('./models/animal');

// Carega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const animalRoute = require('./routes/animal-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Instancia as requisições definidas
app.use('/', indexRoute);
app.use('/animals', animalRoute);
app.use('/products', productRoute);

// Exporta o conteúdo para requires.
module.exports = app;