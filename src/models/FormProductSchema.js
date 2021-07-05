const mongoose = require('mongoose');

const CreateFormProductSchema = mongoose.Schema({
		category: String,
        model: String,
        brand: String,
        provedor: String,
        price: Number,
        stock: Number,

		createdAt: { type: Date, default: Date.now },
		updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('FormProduct', CreateFormProductSchema);








