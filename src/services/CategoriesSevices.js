const Categorie = require('../models/CategoriesSchema');




const create = async (data) => {
    const categories =  await new Categorie(data).save();
    return categories;
};

const getAll = async () => {
    return await Categorie.find().populate('Categorie').exec();
};





module.exports = {
    create,
    getAll,
}
