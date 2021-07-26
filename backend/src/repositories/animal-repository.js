'use strict';

const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');

exports.create = async(data) => {
    
    let animal = new Animal(data);
    await animal.save();
}

exports.get = async() => {
 
    const res = await Animal.find({}, 'specie race birthDate vaccines');
    return res;
}

exports.getById = async (id) => {

    const res = await Animal.findById(id,
        'specie race birthDate vaccines');

    return res;
}

exports.update = async(id, data) => {
    await Animal
        .findByIdAndUpdate(id, {
            $set: { 
                specie: data.specie,
                race: data.race,
                birthDate: data.birthDate,
                vaccines: data.vaccines,
                images: data.images,

            }
        });
}

exports.delete = async(id) => {
    return Animal 
      .findOneAndRemove(id);    
}