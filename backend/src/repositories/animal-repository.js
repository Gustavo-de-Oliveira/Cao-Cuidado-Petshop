'use strict';

const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');

exports.create = async(data) => {

    let animal = new Animal(data);
    await animal.save();
}

exports.get = async() => {
 
    const res = await Animal.find({
            active: true        
        }, 'specie race birthDate');
    return res;
}

exports.update = async(id, data) => {
    await Animal
        .findByIdAndUpdate(id, {
            $set: { // Seta o que vai ser alterado
                vaccines: data.vaccines,
                photos: data.photos,
            }
        });
}

exports.delete = (id) => {
    return Animal 
      .findOneAndRemove(id);    
}