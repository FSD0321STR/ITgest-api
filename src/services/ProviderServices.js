const { Provider, createProviderSchema } = require('../models/provider');
const mongoose = require(mongoose);

autoIncrement.initialize(mongoose);

const createProvider = async (document) => {
    const provider = await createProviderSchema.plugin(autoIncrement.plugin, 'Provider');
    return provider;

};

const readProvider = async (id) => {
    return await Provider.findById(id).exec();
};

const readAll = async () => {
    return await Provider.find().populate('Provider').exec();
};

const remove = async (id) => {
    const response = await Provider.findByIdAndDelete(id).exec();
    return response !== null;
}

module.exports = {
    readAll,
    readProvider,
    createProvider,
    remove,
}