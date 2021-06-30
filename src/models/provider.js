const mongoose = require('mongoose');

const ProviderSchema =  mongoose.Schema({
    name: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});



ProviderSchema.pre('save', async function (next) {
    const provider = this;
    if (!provider.id) {
        autoIncrement.initialize(mongoose);
        createProviderSchema.plugin(autoIncrement.plugin, 'Provider');
    }
    next();
});

const Provider = mongoose.model('Provider', ProviderSchema);

module.exports = {
    Provider,
    ProviderSchema,
};