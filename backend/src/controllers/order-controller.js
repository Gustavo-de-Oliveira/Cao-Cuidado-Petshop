'use strict';

const guid = require('guid');
const repository = require('../repositories/order-repository');

const ValidationContract = require('../validators/fluent-validators');

// List all orders
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

// Find Order By Id
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

// Find Order By (Order Number)
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

 // Create new Order
exports.post = async(req, res, next) => {

    try{
        await repository.create({
            customer: req.body.customer,
            number: guid.raw().substring(0, 6),
            items: req.body.items
        })
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'
        });
    } catch (e) { 
        res.status(500).send({ 
            message: 'Falha ao processar requisição', 
            data: e
        }); 
    };
};

// Update an existing order
exports.put = async(req, res, next) => {
    
    let contract = new ValidationContract();

    contract.isRequired(req.body.customer, "O campo 'customer' é necessário");
    contract.isRequired(req.body.items, "O campo 'items' é necessário");

    if(!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
    }

    try{
        await repository.update(req.params.id, req.body);
        res.status(201).send({
            message: 'Pedido atualizado.',
        });
    } catch (e) {

        res.status(400).send({
            message: 'Falha ao processar requisição',
            data: e
        });
    };
} 


// Delete order, given a id
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
