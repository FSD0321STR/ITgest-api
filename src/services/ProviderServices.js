// const { Provider, createProviderSchema } = require('../models/provider');
// const mongoose = require('mongoose');
// const { request } = require('../app');
// const autoIncrement = require('mongoose-auto-increment');

// autoIncrement.initialize(mongoose);

// const createProvider = async (data) => {
//     const provider =  await new Provider(data).save();
//     return provider;
// };

// const readProvider = async (id) => {
//     return await Provider.findById(id).exec();
// };

// const readAll = async () => {
//     return await Provider.find().populate('Provider').exec();
// };

// const remove = async (id) => {
//     const response = await Provider.findByIdAndDelete(id).exec();
//     return response !== null;
// }

// module.exports = {
//     readAll,
//     readProvider,
//     createProvider,
//     remove,
// }