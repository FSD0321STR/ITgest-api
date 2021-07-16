const { Router } = require('express');
const OrderServices = require('../services/OrderService');
const validate = require('../middlewares/validate')
const {validateOrder} = require('../models/Order')
// const protect = require('../middlewares/protect');
const router = Router();
// router.use(protect); falta ver como le ha llamado Victor al midedleware  de validacion


router.post("", async (req, res) => {
    const body  = req.body;
    const newOrder = await OrderServices.createOrder(body)
    return res.status(201).json(newOrder)
});

router.get("", async (req, res) => {
    const orders = await OrderServices.readAll()
    console.log(orders)
    return res.status(200).json(orders);
});

router.get("/:id", async (req, res) => {
    const { id } = req.params
    console.log(id);
    const order = await OrderServices.read(id);
    return res.status(200).json(order);
});

router.patch("/:id", validate(validateOrder),async (req, res) => {
    const { id } = req.params
    const body = req.body
    const order = await OrderServices.updateOrder(id, body);
    return res.status(200).json(order);
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    await OrderServices.delete(id);
    res.status(200).json("Order deleted");
});

router.patch("/alldelivered", async (req ,res) => {
    await OrderServices.clearAlOrders();
    return res.status(200).json("All Orders have been delivered")
});

module.exports = router;
