'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
 
    const res = await Product.find({
            active: true        
        }, 'image title  description oldPrice newPrice link');

    return res;
}

exports.create = async(data) => {

    let product = new Product(data);
    await product.save();
}

exports.update = async(id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: { // Seta o que vai ser alterado
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug,
            }
        });
}

exports.delete = (id) => {
    return Product 
      .findOneAndRemove(id);    
}