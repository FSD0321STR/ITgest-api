const mongoose = require('mongoose');
const Ajv = require('ajv');
const ajv = new Ajv();

const OrderSchema =  mongoose.Schema({
    product: String,
    model: String,
    Product: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider'
    },
    amunt: Number,
    delivered: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Orders', OrderSchema);


const OrderCreateSchema = {
    type: 'object',
    properties: {
        product: {type: 'String'},
        model: {type: 'String'},
        Product: {type: 'String'},
        Provider: {type: 'String'},
        provider: {type: 'String'},
        amunt: {type: 'Number'},
    },
      required: ["product", "model" , "idProduct" , "idProvider" , "provider" , "amunt"],
      additionalProperties: false
};

const OrderUpDateSchema = {
    type: 'object',
    properties: {
        product: {type: 'String'},
        model: {type: 'String'},
        idProduct: {type: 'String'},
        idProvider: {type: 'String'},
        provider: {type: 'String'},
        amunt: {type: 'Number'},
        delivered: {type: 'Boolean'}
    },
      required: [],
      additionalProperties: false
};

validateOrder = (document, method) => {
    switch (method) {
        case 'POST':
            return ajv.validate(OrderCreateSchema, document);
        case 'PATCH':
            return ajv.validate(OrderUpDateSchema, document);;
    }
};


module.exports = {
    Order,
    OrderSchema,
    OrderCreateSchema,
    OrderUpDateSchema,
    validateOrder
};