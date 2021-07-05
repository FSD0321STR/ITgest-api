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

const userCreateSchema = {
    type: "object",
    properties: {
      title: {type: "string"},
      board: {type: "string"},
    },
    required: ["title", "board"],
    additionalProperties: false
};


const userUpdateSchema = {
    type: "object",
    properties: {
      title: { type: "string" },
      completed: { type: "boolean" },
      board: { type: "string" },
    },
    required: ["title", "completed"],
    additionalProperties: false
};


const userPatchSchema = {
    type: "object",
    properties: {
      title: {type: "string"},
      completed: {type: "boolean"},
    },
    required: [],
    additionalProperties: false
};

validateUser = (document, method) => {
    switch (method) {
        case 'POST':
            return ajv.validate(userCreateSchema, document);
        case 'PUT':
            return ajv.validate(userUpdateSchema, document);
        case 'PATCH':
            return ajv.validate(userPatchSchema, document);
    }
}

const User = mongoose.model('User', UserSchema);
module.exports = {
	User,
	validateUser,
}