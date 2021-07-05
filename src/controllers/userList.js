const { Router } = require('express');
const { validateUser } = require('../models/user');
const UserService = require('../services/userServices');
const validate = require("../middlewares/validate")
const protect = require('../middlewares/protect');

const router = Router();

router.use(protect);

router.get("", async (req, res) => {
    const users = await UserService.readAll();
    return res.status(200).json(users);
});

router.get("/:id", async (req, res) => {
    const user = await UserService.read(req.params.id);
    return res.status(200).json(user);
});

router.post("", validate(validateUser), async (req, res) => {
    const body  = req.body;
    const task = await UserService.create(body);
    return res.status(201).json(task)
});

router.put("/:id", validate(validateUser), async (req, res) => {
    const body  = req.body;
    const { id } = req.params
    const task = await UserService.update(id, body);
    return res.status(200).json(task)
});

router.patch("/:id", validate(validateUser), async (req, res) => {
    const body  = req.body;
    const { id } = req.params
    const task = await UserService.update(id, body);
    return res.status(200).json(task)
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deleted = await UserService.remove(id);
    return res.status(200).json(deleted)
});

router.post('/clear', async (req, res) => {
    const deleted = await UserService.clearCompleted();
    return res.status(200).json(deleted)
})


module.exports = router;