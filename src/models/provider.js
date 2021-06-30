const mongoose = require('mongoose');
const createProviderSchema =  mongoose.Schema({
    name: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Provider = mongoose.model('Provider', createProviderSchema);

ProviderSchema.pre('save', async function (next) {
    const provider = this;
    if (user.isMid("id")) {
        user.id = await encryptPassword(user.password); // encrypt;
    }
    next();
});

module.exports = {
    Provider,
    createProviderSchema,
};