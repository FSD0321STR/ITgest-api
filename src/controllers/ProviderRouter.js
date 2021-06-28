const { Router } = require('express');
const { validateTask } = require('../models/mongoose');
const ProiderServices = require('../services/ProviderServices')
// const protect = require('../middlewares/protect');

const router = Router();

// router.use(protect); falta ver como le ha llamado Victor al midedleware  de validacion

router.get("", async (req, res) => {
    const provider = await ProviderServices.readAll();
    return res.status(200).json(provider);
});

router.get("/:id", async (req, res) => {
    const provider = await ProviderServices.read(req.params.id);
    return res.status(200).json(provider);
});

router.post("", async (req, res) => {
    const body  = req.body;
    const provider = await ProviderServices.create(body);
    return res.status(201).json(provider)
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deleted = await ProviderServices.remove(id);
    return res.status(200).json(deleted)
});


module.exports = router;