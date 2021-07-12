
require('dotenv').config();
const Ajv = require('ajv');
const ajv = new Ajv();
const mongoose = require('mongoose');
const { encryptPassword } = require('../helpers/password');

mongoose.connect(`mongodb+srv://admin:mongoadmin@itgestcluster.1piwo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });

const Item = mongoose.model('Item', {
    model: String,
    Brand: String,
    Provider: String,
    Category: String,
    Price: Number,
    minStock: Number,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// SCHEMA USER
const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    role: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await encryptPassword(user.password); // encrypt;
    }
    next();
});

const User = mongoose.model('User', userSchema);

const itemCreateSchema = {
    type: "object",
    properties: {
      title: {type: "string"},
      brand: {type: "string"},
      provider: {type: "string"},
      Category: {type: "string"},
      Price: {type: "number"},
      minStock: {type: "number"},
    },
    required: ["title", "brand", "provider", "Price"],
    additionalProperties: false
};


const itemUpdateSchema = {
    type: "object",
    properties: {
        title: {type: "string"},
        brand: {type: "string"},
        provider: {type: "string"},
        Category: {type: "string"},
        Price: {type: "number"},
        minStock: {type: "number"},
      },
    required: [],
    additionalProperties: false
};


const itemPatchSchema = {
    type: "object",
    properties: {
        title: {type: "string"},
        brand: {type: "string"},
        provider: {type: "string"},
        Category: {type: "string"},
        Price: {type: "number"},
        minStock: {type: "number"},
      },
    required: [],
    additionalProperties: false
};

validateItem = (document, method) => {
    switch (method) {
        case 'POST':
            return ajv.validate(itemCreateSchema, document);
        case 'PUT':
            return ajv.validate(itemUpdateSchema, document);;
        case 'PATCH':
            return ajv.validate(itemPatchSchema, document);;
    }
}



module.exports = {
    User,
}

