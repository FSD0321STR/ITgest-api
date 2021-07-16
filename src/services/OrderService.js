const { Order } = require('../models/Order');
const { Provider } = require('../models/provider');

const createOrder = async (order) => {
    const newOrder =  await new Order(order).save();
    console.log(newOrder);
    // await Order.findByIdAndUpdate(order.provider, { $push: { orders: order.id } });
    return newOrder;
};

const read = async (id) => {
    await Order.findById(id).exec();
}


const readAll = async () => {
    return await Order.find().exec();
};

const updateOrder = async (id, fields) => {
    const document = await Order.findById(id).exec();
    const newDocument = {
        ...document.toObject(),
        ...fields,
    };
    document.set(newDocument);
    await document.save();
    return document; 
};

const removeOrder = async (id) => {
    const response = await Order.findByIdAndDelete(id).exec();
    return response !== null;
}

const clearAlOrders = async () => {
    const response = await Order.deleteMany({delivered: true});
    return response !== null;
};

module.exports = {
    createOrder,
    updateOrder,
    read,
    readAll,
    removeOrder,
    clearAlOrders,
}