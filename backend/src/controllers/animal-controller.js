'use strict';

const repository = require('../repositories/animal-repository');
const ValidationContract = require('../validators/fluent-validators');

// Lista todos os animais
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
    
    contract.hasMinLen(req.body.specie, 2, 'A espécie deve conter pelo menos 2 caracteres');

    if(!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
    }

    try{
        await repository.create(req.body)
        res.status(201).send({
            message: 'Animal cadastrado com sucesso!'
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
            message: 'Animal atualizado.',
        });
    } catch (e) {

        res.status(400).send({
            message: 'Falha ao processar requisição',
            data: e
        });
    };
} 

// Delete Animal
exports.delete = async(req, res, next) => {
    try{
        await repository.delete(req.params.id) 
        res.status(200).send({
            message: 'Animal removido com sucesso!'
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao remover animal',
            data: e
        })
    };
};
