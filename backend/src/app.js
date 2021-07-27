'use strict';

const express       = require('express');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose'); 
const config        = require('./config');
const cors = require('cors');
const app = express();

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

const router = express.Router();

// Conecta ao MongoDB
mongoose.connect(config.connectionString,  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});

// Carrega os modelos
const User = require('./models/user');
const Product = require('./models/product');
const Animal = require('./models/animal');
const Order = require('./models/order');
const Adoption = require('./models/adoption');

// Carega as Rotas
const userRoute = require('./routes/user-route');
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const animalRoute = require('./routes/animal-route');
const orderRoute = require('./routes/order-route');
const adoptionRoute = require('./routes/adoption-route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Instancia as requisições definidas
app.use('/', indexRoute);
app.use('/animals', animalRoute);
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);
app.use('/adoptions', adoptionRoute);

// Exporta o conteúdo para requires.
module.exports = app;