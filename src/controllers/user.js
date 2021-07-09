// var fs = require('fs');
var path = require('path');
var bcrypt = require('bcrypt');
const AuthServices = require('../services/AuthServices');
// var jwt = require('../services/jwt');
// var dotenv = require('dotenv');
const { createToken } = require('../helpers/token');

async function register(req, res, next){
	const {
		body
	} = req;
const user = await AuthServices.register(body);
if(!user){
	return res.status(403).json({message: 'the email is already in use'});
}
return res.status(201).json({ user });
}

async function login(req, res, next){
	const {
		body
	} = req;
const user = await AuthServices.login(body);
if(!user){
	return res.status(403).json({message: 'invalid credentials'});
}
const token = await createToken({id: user._id});
console.log("logueando");
return res.status(200).json({ user, token });
}



module.exports = {
	register,
	login,
}