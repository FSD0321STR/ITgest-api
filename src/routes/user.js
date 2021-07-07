const express = require('express');
const UserController = require('../controllers/user');
const UserListController = require('../controllers/userList');

const api = express.Router();
//const md_auth = require('../middlewares/authenticated');

const multipart = require('connect-multiparty');
//const md_upload = multipart({ uploadDir: './uploads/users' });

//api.get('/probando-controlador', md_auth.ensureAuth, UserController.pruebas);

api.post('/register', UserController.register);
api.post('/login', UserController.login);
api.get('/users', UserListController.get);
// api.post('update_user/:id', UserController.update);
// api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);
// api.post('/upload-image-user/:id', [md_auth.ensureAuth, md_upload], UserController.uploadImage);
// api.get('/get-image-user/:imageFile', UserController.getImageFile);

module.exports = api;