const { Router } = require('express');
const CategoriesServices = require('../services/CategoriesSevices');
// const validate = require("../middlewares/validate");
// const protect = require('../middlewares/protect');

const router = Router();

// router.use(protect);


router.post("", async (req, res) => {
    const body  = req.body;
    const categories = await CategoriesServices.create(body.data);
    return res.status(201).json(categories)
});

router.get("", async (req, res) => {
    const categories = await CategoriesServices.getAll();
    return res.status(200).json(categories);
});

module.exports = router;