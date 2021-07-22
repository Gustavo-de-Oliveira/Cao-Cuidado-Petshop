'use strict';

const express       = require('express');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose'); 
const config        = require('./config');

const app = express();
const router = express.Router();

// Conecta ao MongoDB
mongoose.connect(config.connectionString,  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true});

// Carrega os modelos
const User = require('./models/user');
const Product = require('./models/product');
const Animal = require('./models/animal');

// Carega as Rotas
const userRoute = require('./routes/user-route');
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const animalRoute = require('./routes/animal-route');
const user = require('./models/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Instancia as requisições definidas
app.use('/', indexRoute);
app.use('/animals', animalRoute);
app.use('/products', productRoute);
app.use('/users', userRoute);

// Exporta o conteúdo para requires.
module.exports = app;