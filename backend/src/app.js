'use strict';

const express       = require('express');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose'); 

const app = express();
const router = express.Router();

// Conecta ao MongoDB
mongoose.connect('mongodb+srv://gant:nome@cluster0.q87wq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',  {useNewUrlParser: true, useUnifiedTopology: true});

// Carrega os modelos
const Animal = require('./model/animal');

// Carega as Rotas
const indexRoute = require('./routes/index-route');
const animalRoute = require('./routes/animal-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Instancia as requisições definidas
app.use('/', indexRoute);
app.use('/animals', animalRoute);


// Exporta o conteúdo para requires.
module.exports = app;