const mongoose = require('mongoose');
const { encryptPassword } = require('../helpers/password');
const Schema = mongoose.Schema;


const UserSchema = Schema({
		name: String,
		surname: String,
		email: String,
		password: String,
		role: String,
		image: String
});
UserSchema.pre("save",async function(next){
	const user = this;
	if(user.isModified("password")){
		user.password = await encryptPassword(user.password);
	}
	next();
});

const User = mongoose.model('User', UserSchema);
module.exports = { User }