const { Item } = require('../models/mongoose');

const create = async (document) => {
    const item = await new Item(document).save();
    return item;
};

const read = async (id) => {
    return await Item.findById(id).exec();
}

const readAll = async () => {
    return await Item.find().exec();
}

const update = async (id, fields) => {
    const document = await Item.findById(id).exec();
    const newDocument = {
        ...document.toObject(),
        ...fields,
    };
    document.set(newDocument);
    await document.save();
    return document;
}

const remove = async (id) => {
    const response = await Item.findByIdAndDelete(id).exec();
    return response !== null;
}


module.exports = {
    create,
    read,
    readAll,
    update,
    remove,
}

