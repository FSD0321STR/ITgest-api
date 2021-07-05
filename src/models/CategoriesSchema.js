const mongoose = require('mongoose');

const createCategoriesSchema = mongoose.Schema({
		name: String,
		createdAt: { type: Date, default: Date.now },
		updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Category', createCategoriesSchema);








