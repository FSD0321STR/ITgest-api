const { User } = require('../models/user');
const create = (fields) => new User(fields).save();
const exists = (id) => User.exists({ _id: id });
const findByEmail = (email) => User.findOne({ email });
const findById = (id) => User.findById(id);
const mongoose = require('mongoose');
const { Provider } = require('../models/provider');

const Users = async () => {
  return await Provider.find().populate('users').exec();
};

module.exports = {
  create,
  exists,
  findByEmail,
  findById,
  Users,
}
