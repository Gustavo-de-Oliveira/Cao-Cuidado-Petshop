'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');


exports.create = async(data) => {

    let product = new Product(data);
    await product.save();
}

exports.get = async() => {
 
    const res = await Product.find({
            active: true        
        }, 'image title  description oldPrice newPrice link');

    return res;
}

exports.update = async(id, data) => {
    
    await Product
        .findByIdAndUpdate(id, {
            $set: { 
                title: data.title,
                description: data.description,
                oldPrice: data.oldPrice,
                newPrice: data.newPrice,
            }
        });
}

exports.delete = (id) => {
    return Product 
      .findOneAndRemove(id);    
}