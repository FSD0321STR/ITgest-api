const mongoose = require('mongoose');


const createProviderSchema = new Schema({
    name: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
};

const Provider = mongoose.models('Provider', createProviderSchema);
};


module.exports = {
    Provider,
    createProviderSchema,
};