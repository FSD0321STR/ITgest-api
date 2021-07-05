const FormProduct = require('../models/FormProductSchema');



const create = async (data) => {
    const forms =  await new FormProduct(data).save();
    return forms;
};

const getAll = async () => {
    return await FormProduct.find().populate('FormProduct').exec();
};





module.exports = {
    create,
    getAll,
}
