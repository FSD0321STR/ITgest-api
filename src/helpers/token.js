const jwt = require('jsonwebtoken');
const util = require('util');
const dotenv = require('dotenv');

const jwtCreate = util.promisify(jwt.sign);
const jwtVerify = util.promisify(jwt.verify);


const createToken = (obj) => {
    return jwtCreate (obj, process.env.JWT_SECRET);

}

const verfyToken = (token) => {
    return jwtVerify (obj, process.env.JWT_SECRET);
};

module.exports = {
    createToken,
    verfyToken,
}