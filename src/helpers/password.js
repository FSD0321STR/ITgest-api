const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();
const encryptPassword = (password) =>
  bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS, 10));
const comparePasswords = ({ hash, plain }) => bcrypt.compare(plain, hash);
module.exports = {
  encryptPassword,
  comparePasswords,
};