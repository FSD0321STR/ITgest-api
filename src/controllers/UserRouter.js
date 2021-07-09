const { Router } = require('express');
const { User } = require('../models/user');
const UserServices = require('../services/userServices');
// const protect = require('../middlewares/protect');

const router = Router();

// router.use(protect); falta ver como le ha llamado Victor al midedleware  de validacion


router.get("", async (req, res) => {
    const users = await UserServices.readAll()
    return res.status(200).json(users);
});


router.post("", async (req, res) => {
    const body  = req.body;
    const user = await UserServices.createUser(body.data)
    return res.status(201).json(user)
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deleted = await UserServices.remove(id)
    return res.status(200).json(deleted)
});

// router.patch("/:id", async (req, res) => {
//     const body  = req.body;
//     const { id } = req.params
//     const user = await UserServices.updateUser(id ,body);
//     return res.status(200).json(user)
// });No funciona


module.exports = router;