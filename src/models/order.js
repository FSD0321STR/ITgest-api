const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const createOrder = (data) => {
    const orderId = uuidv4(); // quiero que sea consecutivo
    data.orderId = id;
    data.received = false;
    order(data).save()
    return id;
};
