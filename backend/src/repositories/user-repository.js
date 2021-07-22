'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = async() => {
 
    const res = await User.find({
        },'name email password user_type');
    return res;
}

exports.create = async(data) => {

    let user = new User(data);
    await user.save();
}

exports.update = async(id, data) => {

    await User
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.title,
                email: data.email,
                password: data.password,
                user_type: data.user_type,
            }
        })    
} 

exports.delete = (id) => {

    return User.findOneAndRemove(id);    
}