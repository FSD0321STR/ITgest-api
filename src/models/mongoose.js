
require('dotenv').config();
const Ajv = require('ajv');
const ajv = new Ajv();
const mongoose = require('mongoose');
const { encryptPassword } = require('../helpers/password');

mongoose.connect(`mongodb+srv://admin:mongoadmin@itgestcluster.1piwo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });


// SCHEMA USER
const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    role: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await encryptPassword(user.password); // encrypt;
    }
    next();
});

const User = mongoose.model('User', userSchema);



module.exports = {
    User,
}

