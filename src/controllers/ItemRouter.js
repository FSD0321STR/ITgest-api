const { Router } = require('express');
const { validateItem } = require('../models/mongoose');
const ItemService = require('../services/ItemService');
const validate = require("../middlewares/validate");
const protect = require('../middlewares/protect');

const router = Router();

router.use(protect);

router.get("", async (req, res) => {
    const items = await ItemService.readAll();
    return res.status(200).json(items);
});

router.get("/:id", async (req, res) => {
    const item = await ItemService.read(req.params.id);
    return res.status(200).json(item);
});

//aslkdnkasldk

router.post("", validate(validateItem), async (req, res) => {
    const body  = req.body;
    const item = await ItemService.create(body);
    return res.status(201).json(item)
});

router.put("/:id", validate(validateItem), async (req, res) => {
    const body  = req.body;
    const { id } = req.params
    const item = await ItemService.update(id, body);
    return res.status(200).json(item)
});

router.patch("/:id", validate(validateItem), async (req, res) => {
    const body  = req.body;
    const { id } = req.params
    const item = await ItemService.update(id, body);
    return res.status(200).json(item)
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deleted = await ItemService.remove(id);
    return res.status(200).json(deleted)
});

// router.post('/clear', async (req, res) => {
//     const deleted = await ItemService.clearCompleted();
//     return res.status(200).json(deleted)
// })


module.exports = router;