const { Router } = require('express');
const FormProductServices = require('../services/FormProductServices');


const router = Router();



router.post("", async (req, res) => {
    const body          = req.body;
    const formProduct   = await FormProductServices.create(body.data);
    return res.status(201).json(formProduct)
});




router.get("", async (req, res) => {
    const formProduct = await FormProductServices.getAll();
    return res.status(200).json(formProduct);
});

module.exports = router;