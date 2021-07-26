'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

// List all orders
exports.get = async(data) => {
    let res = await Order
        .find({}, 'number status createDate customer items')
        .populate('customer', 'name')
        .populate('items.product', 'title');

    return res;
}

// Find Order by ID
exports.getById = async (id) => {

    const res = await Order
        .findById(id,'number status createDate customer items')
        .populate('customer', 'name')
        .populate('items.product', 'title');


        return res;
}

// Find Order by (Order Number)
exports.getByNumber = async (_number) => {
    
    const res = await Order.findOne({
            number: _number
        },'number status createDate customer items')
        .populate('customer', 'name')
        .populate('items.product', 'title');

    return res;
}

// Create new Order
exports.create = async(data) => {
    
    // Casts String to Object Id
    data.customer = mongoose.Types.ObjectId(data.customer);
    for(let i = 0; i < data.items.length; i++) {
        data.items.product = mongoose.Types.ObjectId(data.items.produc);
    }

    let order = new Order({
        customer: data.customer,
        number: data.number,
        createDate: data.createDate,
        status: data.status,
        items: data.items,
    });
    await order.save();
}

// Update existing order
exports.update = async(id, data) => {
    
    // Casts String to Object Id
    data.customer = mongoose.Types.ObjectId(data.customer);
    for(let i = 0; i<data.items.length; i++) {
        data.items[i].product = mongoose.Types.ObjectId(data.items[i].product);    
    }

    await Order
        .findByIdAndUpdate(id, {
            $set: { 
                customer: data.customer,
                items: data.items,
                status: data.status,
                createData: data.createDate
            }
        });
}

// Delete order
exports.delete = async(id) => {
    return Order.findByIdAndRemove(id);
}