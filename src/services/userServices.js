const { User } = require('../models/user');
const create = (fields) => new User(fields).save();
const exists = (id) => User.exists({ _id: id });
const findByEmail = (email) => User.findOne({ email });
const findById = (id) => User.findById(id);
const Users = () => { User.find() };

module.exports = {
  create,
  exists,
  findByEmail,
  findById,
  Users,
};