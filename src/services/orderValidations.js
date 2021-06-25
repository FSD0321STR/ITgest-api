const mongoose = require('mongoose');

const Ajv = require("ajv");
const ajv = new Ajv();

const orderCreateSchema = {
    type: "object",
    properties: {
      productId: {type: "number"},
      name: {type: "string"},
      brand: {type: "string"},
      provider: {type: "string"}, 
      amount: {type: "number"},
    },
    required: ["productId", "name", "brand", "provider", "amount"],
    additionalProperties: false
};

const orderPatchSchema = {
    type: "object",
    properties: {
      productId: {type: "number"},
      name: {type: "string"},
      brand: {type: "string"},
      provider: {type: "string"}, 
      amount: {type: "number"},
    },
    required: [],
    additionalProperties: false
};

const validateOrder = (schema, data) => {
    return ajv.validate(schema, data);
}

const entityExists = (entity, id) => {
    const element = db.get(entity)
    .find({ id: id })
    .value();
    return element;
};