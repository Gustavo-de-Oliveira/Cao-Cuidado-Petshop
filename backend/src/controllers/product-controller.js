'use strict';

const repository = require('../repositories/product-repository');
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

exports.getByLink = async(req, res, next) => {

    try{
        const data = await repository.getByLink(req.params.link);
        res.status(200).send(data); 
     } catch(e) {
         res.status(500).send({
             message: 'Falha ao processsar sua requisicao', 
             data: e
         });
     };
 };
 
 exports.getById = async(req, res, next) => {
 
    try {
        const data = await repository.getById(req.params.id);
        res.status(200).send(data); 
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processsar sua requisicao', 
            data: e
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
    let contract = new ValidationContract();
    
    contract.hasMinLen(req.body.title, 3, 'O título deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.description, 3, 'A descrição deve conter pelo menos 3 caracteres');

    if(!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
    }

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
};

exports.delete = async(req, res, next) => {
    try{
        await repository.delete(req.params.id) 
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
