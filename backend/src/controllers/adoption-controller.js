'use strict';

const guid = require('guid');
const repository = require('../repositories/adoption-repository');
const ValidationContract = require('../validators/fluent-validators');

// List all Adoptions
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

// Find Adoption By Id
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

// Find Adoption By (Adoption Number)
exports.getByNumber = async(req, res, next) => {

    try{
        const data = await repository.getByNumber(req.params.number);
        res.status(200).send(data); 
     } catch(e) {
         res.status(500).send({
             message: 'Falha ao processsar sua requisicao', 
             data: e
         });
     };
 };

 // Create new Adoption
exports.post = async(req, res, next) => {
    
    // Validation
    let contract = new ValidationContract();
    contract.isRequired(req.body.adopter, "O campo 'adopter' é necessário");
    contract.isRequired(req.body.animal, "O campo 'animal' é necessário");

    if(!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
    }

    try{
        await repository.create({
            adopter: req.body.adopter,
            number: guid.raw().substring(0, 6),
            animal: req.body.animal
        })
        res.status(201).send({
            message: 'Adoção cadastrada com sucesso!'
        });
    } catch (e) { 
        res.status(500).send({ 
            message: 'Falha ao processar requisição', 
            data: e
        }); 
    };
};

// Update an existing Adoption
exports.put = async(req, res, next) => {
    
    let contract = new ValidationContract();

    contract.isRequired(req.body.adopter, "O campo 'adopter' é necessário");
    contract.isRequired(req.body.animal, "O campo 'animal' é necessário");
    contract.isRequired(req.body.createDate, "O campo 'createDate' é necessário");
    contract.isRequired(req.body.status, "O campo 'status' é necessário");

    if(!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
    }

    try{
        await repository.update(req.params.id, req.body);
        res.status(201).send({
            message: 'Adoção atualizada.',
        });
    } catch (e) {

        res.status(400).send({
            message: 'Falha ao processar requisição',
            data: e
        });
    };
} 


// Delete Adoption, given a id
exports.delete = async(req, res, next) => {
    try{
        await repository.delete(req.params.id) 
        res.status(200).send({
            message: 'Pedido removido com sucesso!'
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao remover pedido',
            data: e
        });
    };
}
