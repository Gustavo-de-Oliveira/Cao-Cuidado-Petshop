'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repository = require('../repositories/product-repository');
const router = require('../routes/product-route');
const ValidationContract = require('../validators/fluent-validators');

// Lista todos os Produtos
exports.get = async(req, res, next) => {

    try {
        const data = await repository.get();
        res.status(200).send(data); 
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    };
};

exports.post = async(req, res, next) => {
    
    let contract = new ValidationContract();
    
    contract.hasMinLen(req.body.title, 3, 'O título deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.link, 3, 'O link deve conter pelo menos 3 caracteres');

    if(!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
    }

    try{
        await repository.create(req.body)
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    } catch (e) { 
        res.status(500).send({ 
            message: 'Falha ao processar requisição', 
            data: e
        }); 
    };
};

// Update product
exports.put = async(req, res, next) => {
    
    try{
        await repository.update(req.params.id, req.body);
        res.status(201).send({
            message: 'Produto atualizado.',
        });
    } catch (e) {

        res.status(400).send({
            message: 'Falha ao processar requisição',
            data: e
        });
    };
} 

exports.delete = async(req, res, next) => {
    try{
        await repository.delete(req.body.id) 
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao remover produto',
            data: e
        })
    };
};
