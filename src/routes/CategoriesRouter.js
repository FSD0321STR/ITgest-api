const { Router } = require('express');
const { validateBoard } = require('../models/mongoose');
// const BoardService = require('../services/BoardService');
// const validate = require("../middlewares/validate");
const CategoriesProtect  = require('../middlewares/CategoriesProtect');

const router = Router();

router.use(CategoriesProtect);


router.get("", async (req, res) => {
    const categories = await CategoriesProtect.readAll();
    return res.status(200).json(categories);
});

// const express = require('express');
// const CategoriesController = require('../controllers/CategoriesRouter');

// const api = express.Router();
// const md_auth = require('../middlewares/authenticated');

// const multipart = require('connect-multiparty');
// // const md_upload = multipart({ uploadDir: './uploads/users' });


// // api.post('/login', UserController.loginUser);
// // api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);
// // api.post('/upload-image-user/:id', [md_auth.ensureAuth, md_upload], UserController.uploadImage);
// api.get('/categories', CategoriesController.);

// module.exports = api;