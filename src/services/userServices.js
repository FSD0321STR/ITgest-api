// const { User } = require('../models/user');
// const create = (fields) => new User(fields).save();
// const exists = (id) => User.exists({ _id: id });
// const findByEmail = (email) => User.findOne({ email });
// const findById = (id) => User.findById(id);
// const mongoose = require('mongoose');
// const { Provider } = require('../models/provider');

// const Users = async () => {
//   return await Provider.find().populate('users').exec();
// };

// module.exports = {
//   create,
//   exists,
//   findByEmail,
//   findById,
//   Users,
// }

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
    // updateUser,
}
