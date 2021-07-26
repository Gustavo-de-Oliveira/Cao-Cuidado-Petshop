'use strict';

const mongoose = require('mongoose');
const Adoption = mongoose.model('Adoption');

// List all Adoptions
exports.get = async(data) => {
    
    let res = await Adoption
        .find({}, 'number status createDate adopter animal')
        .populate('adopter', 'name')
        .populate('animal', 'specie');

    return res;
}

// Find Adoption by ID
exports.getById = async (id) => {

    const res = await Adoption
        .find({}, 'number status createDate adopter animal')
        .populate('adopter', 'name')
        .populate('animal', 'specie race');
        
    return res;
}

// Find Adoption by (Adoption Number)
exports.getByNumber = async (_number) => {
    
    const res = await Adoption.findOne({
            number: _number
        },'number status createDate adopter animal')
        .populate('adopter', 'name')
        .populate('animal', 'specie race');

    return res;
}

// Create new Adoption
exports.create = async(data) => {
    
    // Casts String to Object Id
    data.adopter = mongoose.Types.ObjectId(data.adopter);
    data.animal = mongoose.Types.ObjectId(data.animal);

    let adoption = new Adoption(data);
    await adoption.save();
}

// Update existing Adoption
exports.update = async(id, data) => {

    // Casts String to Object Id
    data.adopter = mongoose.Types.ObjectId(data.adopter);
    data.animal = mongoose.Types.ObjectId(data.animal);


    await Adoption
        .findByIdAndUpdate(id, {
            $set: { 
                adopter: data.adopter,
                number: data.number,
                animal: data.animal,
                status: data.status,
                createData: data.createDate
            }
        });
}

// Delete Adoption
exports.delete = async(id) => {
    return Adoption.findByIdAndRemove(id);
}