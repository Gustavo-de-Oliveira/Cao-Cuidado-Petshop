'use strict';

const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');
const repository = require('../repositories/animal-repository');
const router = require('../routes/animal-route');

// Lista todos os animais
exports.get = async(req, res, next) => {

    try {
        const data = await repository.get();
        res.status(200).send(data); 
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }_;
};

exports.post = async(req, res, next) => {
    
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

// Update Animal
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
