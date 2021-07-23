'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = async() => {
 
    const res = await User.find({
        },'name email password isAdmin birthDate');
    return res;
}

exports.getById = async(id) => {
    const res = await User.findById(id, 'name email password isAdmin birthDate');
    return res;
}

exports.getByEmail = async (_email) => {
    
    const res = await User.findOne({
            email: _email
        }, 'name email password isAdmin birthDate');
    
    return res;
}

exports.create = async(data) => {

    if(data.isAdmin) {
        data.address = null;
        data.paymentMethods = null;
    }

    let user = new User(data);
    await user.save();
}

exports.update = async(id, data) => {
    if(data.isAdmin) {
        await User
            .findByIdAndUpdate(id, {
                nome: data.title,
                email: data.email,
                password: data.password,
                isAdmin: data.isAdmin,
                address: null,
                paymentMethods: null,
            })
    }else{
        await User
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.title,
                email: data.email,
                password: data.password,
                idAdmin: data.isAdmin,
                addres: data.addres,
                paymentMethods: data.paymentMethods,
            }
        }) 
    }       
} 

exports.delete = (id) => {

    return User.findOneAndRemove(id);    
}