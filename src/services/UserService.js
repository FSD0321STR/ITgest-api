const mongoose = require('mongoose');
const {User, UserSchema} = require('../models/user')



const createUser = async (data) => {
    const user =  await new User(data).save();
    return user;
};

const readUser = async (id) => {
    return await User.findById(id).exec();
};

const readAll = async () => {
    return await User.find().populate('User').exec();
};

const remove = async (id) => {
    const response = await User.findByIdAndDelete(id).exec();
    return response !== null;
}
// const updateUser = async (id, fields) => {
//     const document =  User.findById(id).exec();
//     const newDocument = {
//         ...document.toObject(),
//         ...fields,
//     };
//     document.set(newDocument);
//     await document.save();
//     return document; 
// };No funciona

module.exports = {
    readAll,
    readUser,
    createUser,
    remove,
    updateUser,
}