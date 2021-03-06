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
        }, 'image title brand description stock realPrice salePrice link');

    return res;
}

exports.getById = async (id) => {

    const res = await Product.findById(id,
        'image title brand description stock realPrice salePrice link');

        return res;
}

exports.getByLink = async (_link) => {
    
    const res = await Product.findOne({
            link: _link
        }, 'image title brand description stock realPrice salePrice link');
    
    return res;
}

exports.update = async(id, data) => {
    
    await Product
        .findByIdAndUpdate(id, {
            $set: { 
                title: data.title,
                image: data.image,
                description: data.description,
                realPrice: data.realPrice,
                salePrice: data.salePrice,
                onOffer: data.onOffer,
                link: data.link,
                active: data.active,
                stock: data.stock,
                images: data.images,
                brand: data.brand,
            }
        });
}

exports.delete = (id) => {
    return Product 
      .findByIdAndRemove(id);    
}