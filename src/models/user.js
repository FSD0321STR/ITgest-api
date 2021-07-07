const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
		name: String,
		surname: String,
		email: String,
		password: String,
		role: String,
});

const User = mongoose.model('User', UserSchema);



module.exports = {
    User,
    UserSchema,
};