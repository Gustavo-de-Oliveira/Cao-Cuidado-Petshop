'use strict';

const repository = require('../repositories/user-repository');
const ValidationContract = require('../validators/fluent-validators');
const md5 = require('md5')

// Lista todos os Usuários
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

    contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres.');
    contract.isEmail(req.body.email, 3, 'Email inválido');
    contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 6 caracteres.');

    if(req.body.isValid) {
        contract.isFixedLen(req.body.address.state, 2, "O estado deve conter 2 caracteres");
    }

    if(!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try{
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY),
            birthDate: req.body.birthDate,
            isAdmin: req.body.isAdmin,
            address: req.body.address,
            paymentMethods: req.body.paymentMethods,
        })
        res.status(201).send({
            message: 'Usuário cadastrado com sucesso!'
        });
    } catch (e) { 
        res.status(500).send({ 
            message: 'Falha ao processar requisição', 
            data: e
        }); 
    };
};

exports.put = async(req, res, next) => {
    
    let contract = new ValidationContract();

    contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres.');
    contract.isEmail(req.body.email, 3, 'Email inválido');
    contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 6 caracteres.');

    if(!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    await repository.update(req.params.id, req.body);
    res.status(200).send({
        message: 'Usuario atualizado com sucesso!'
    });   
}

exports.delete = async(req, res, next) => {
    try{
        await repository.delete(req.body.id) 
        res.status(200).send({
            message: 'Usuário removido com sucesso!'
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao remover usuário',
            data: e
        })
    };
};
